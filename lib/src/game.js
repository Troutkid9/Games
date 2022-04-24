import Basketball from "./basketball.js";
import Hoop from "./hoop.js";
import Player from "./player.js";
import ShotHelpers from "./shot_helpers.js";
import { ground, cHeight, cWidth } from "./index.js";
import Sound from "./sound";

export default class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.player = new Player(ctx, cWidth - 620, ground - 150);
    this.basketball = new Basketball(
      ctx,
      this.player.x + 100,
      this.player.y - 4,
      -90
    );
    this.hoop = new Hoop(ctx);
    this.started = false;
    this.collided = false;
    this.initialVelocities = null;
    this.vX = null;
    this.vY = null;
    this.t = null;
    this.shotAngle = 60;
    this.score = 0;
    this.scored = false;
    this.missedShots = 0;
    this.shotHelpers = new ShotHelpers(ctx, this.basketball);
    this.draw = this.draw.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
    this.bounceSound = new Sound("assets/audio/bounce.mp3");
    this.swishSound = new Sound("assets/audio/swish.mp3");
    this.crowdSound = new Sound("assets/audio/crowd.mp3");
  }

  play() {
    this.started = true;
    this.crowdSound.play();
  }

  drawScene() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(50, 100, 75)";
    this.ctx.fillRect(0, ground, cWidth, cHeight);
    this.ctx.ellipse(
      cWidth - 10,
      ground + 95,
      750,
      85,
      0,
      -Math.PI / 2,
      Math.PI / 2 + 0.111,
      true
    );
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.moveTo(cWidth - 4, ground);
    this.ctx.lineTo(cWidth - 100, cHeight);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.transform(1, 0, -0.5, 1, 0, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(cWidth - 189, ground + 48, 472, 84);
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(cWidth - 187, ground + 50, 470, 80);
    this.ctx.ellipse(
      cWidth - 189,
      ground + 90,
      140,
      41,
      0,
      -Math.PI / 2,
      Math.PI / 2,
      true
    );
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore();
  }

  drawScore() {
    this.ctx.font = "48px Oswald";
    this.ctx.fillStyle = "green";
    this.ctx.fillText(`Score: ${this.score}`, 450, 50);
    this.ctx.font = "24px Oswald";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(`Attempts Remaining: ${3 - this.missedShots}`, 720, 32);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, cWidth, cHeight);
    this.drawScene();
    this.hoop.draw();
    this.drawScore();
  }

  resetVars() {
    if (this.player.x < 64) {
      this.player.x = 64;
    } else if (this.player.x > 752) {
      this.player.x = 752;
    }
    if (
      (this.basketball.x > this.player.x + 100 && this.player.x >= 752) ||
      this.basketball.x < this.player.x + 100 ||
      this.basketball.y > ground + 80
    ) {
      if (this.basketball.x < cWidth) {
        this.bounceSound.play();
        wait(5000);
      }
      this.basketball.x = this.player.x + 100;
      this.basketball.y = this.player.y - 4;
      if (this.scored) {
        this.score += 2;
        if (this.player.x < 184) this.score += 1;
        this.scored = false;
      } else if (this.basketball.isThrown) {
        this.missedShots += 1;
      }
      this.basketball.isThrown = false;
      this.shotHelpers.startTime = null;
      this.shotHelpers.elapsed = 0;
      this.collided = false;
      this.t = null;
      this.basketball.rotationAngle = -90;
    }
  }

  collisionDetection(obstacle) {
    const ballX = this.basketball.x + this.vX;
    const ballY = this.basketball.y - (this.vY - 9.81 * this.t);
    const ballEndX = ballX + this.basketball.diameter;
    const ballEndY = ballY + this.basketball.diameter;
    let { x, y, width, height } = obstacle;
    let endX = x + width;
    let endY = y + height;

    if (obstacle.type === "Rim" && !(this.basketball.y > endY)) {
      if (
        ballX >= x + 4 &&
        ballEndX <= endX - 4 &&
        ballEndY >= y &&
        ballY <= y
      ) {
        this.scored = true;
        this.swishSound.play();
        return false;
      }
      const rimLeft = { x, y, width: 4, height };
      const rimRight = { x: x + 76, y, width: 4, height };
      this.collisionDetection(rimLeft);
      this.collisionDetection(rimRight);
    } else if (
      ((ballEndX >= x && ballX <= x) || (ballX <= endX && ballEndX >= endX)) &&
      ((ballY <= y && ballEndY >= y) ||
        (ballY <= y && ballEndY >= endY) ||
        (ballY <= endY && ballEndY >= endY) ||
        (ballY >= y && ballEndY <= endY))
    ) {
      // console.log(`Vertical, Current Pos: ${[this.basketball.x, this.basketball.y]}, New Pos: ${[ballX, ballY]}, ${obstacle.type}`);
      return { type: "vertical" };
    } else if (
      ((ballEndY >= y && ballY <= y) || (ballY <= endY && ballEndY >= endY)) &&
      ((ballX <= x && ballEndX >= x) ||
        (ballX >= x && ballEndX <= endX) ||
        (ballX <= x && ballEndX >= endX) ||
        (ballX <= endX && ballEndX >= endX))
    ) {
      // console.log(`Horizontal, Current Pos: ${[this.basketball.x, this.basketball.y]}, New Pos: ${[ballX, ballY]}, ${obstacle.type}`);
      return { type: "horizontal" };
    }
    return false;
  }

  handleThrownBall() {
    this.collided =
      this.collisionDetection(this.hoop.backboard) ||
      this.collisionDetection(this.hoop.rim, this.basketball.lastY);
    if (this.collided) {
      if (this.collided.type === "vertical") this.vX = -this.vX;
      else {
        this.vY = -this.vY;
        this.t = 0;
      }
      // console.log(this.collided, [this.basketball.x, this.basketball.y], this.vY-(9.81 * this.t));
      this.collided = false;
    }
    this.basketball.lastX = this.basketball.x;
    this.basketball.lastY = this.basketball.y;
    [this.basketball.x, this.basketball.y] = this.basketball.move(
      this.vX,
      this.vY,
      this.t
    );
    this.t += 1 / 60;
  }

  over() {
    return this.missedShots === 3;
  }

  draw() {
    this.clearCanvas();
    this.player.draw();
    this.resetVars();
    if (this.basketball.isThrown) {
      this.handleThrownBall();
    } else {
      this.shotHelpers.drawArrow(this.shotAngle);
    }
    this.shotHelpers.drawPowerBar();
    this.basketball.draw();
    if (this.over()) {
      this.started = false;
      const gameOverScreen = document.getElementsByClassName("end-screen")[0];
      const scoreEl = document.createElement("p");
      scoreEl.classList.add("game-over-description");
      scoreEl.appendChild(
        document.createTextNode(`You scored ${this.score} points`)
      );
      gameOverScreen.appendChild(scoreEl);
      gameOverScreen.classList.remove("hidden");
      this.clearCanvas();
    } else window.requestAnimationFrame(this.draw);
  }

  reset() {
    this.resetVars();
    this.score = 0;
    this.player.x = cWidth - 620;
    this.basketball.x = this.player.x + 100;
    this.shotAngle = 60;
    this.missedShots = 0;
    this.play();
    const oldScore = document.getElementsByClassName(
      "game-over-description"
    )[0];
    oldScore.parentNode.removeChild(oldScore);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function wait(ms) {
  await sleep(ms);
}
