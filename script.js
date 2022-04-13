const canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 650;
const ctx = canvas.getContext("2d");

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 10; // radious of ball;
let ballX = cw / 2; // starting point of ball on\
let ballY = ch / 2; // middle of canvas

const racketWidth = 10;
const racketHeight = 80;

const racketPosXPlayer1 = 20;
racketPosYPlayer1 = ch / 2 - racketHeight / 2;

const racketPosXPlayer2 = 1320 - racketWidth;
racketPosYPlayer2 = ch / 2 - racketHeight / 2;

let ballSpeedX = 4;
let ballSpeedY = 4;

let speedUpBy = 0.001; // speed multiplied every ball bounce

let interval;
let game_running = true;
let player_points = 0;
let computer_points = 0;

// keyboard controls
document.body.onkeydown = function (e) {
  // up arrow
  if (e.keyCode == 38) {
    if (game_running) {
      racketPosYPlayer1 -= 20;
    }
  }
  // down arrow
  if (e.keyCode == 40) {
    if (game_running) {
      racketPosYPlayer1 += 20;
    }
  }
};

document.body.onkeyup = function (e) {
  // space bar to reasume
  if (e.keyCode == 32) {
    if (!game_running) {
      ballX = cw / 2;
      ballY = ch / 2;
      ballSpeedX = 1;
      ballSpeedY = 1;
      game_running = true;
      interval = setInterval(game, 1000 / 60);
    }
  }
};

var topCanvas = canvas.offsetTop;
interval = setInterval(game, 1000 / 60);

function playerPosition(evt) {
  racketPosYPlayer1 = evt.clientY - topCanvas - racketHeight / 2;
}

function speedUp() {
  // speed up ball
  if (ballSpeedX > 0 && ballSpeedX < 10) {
    ballSpeedX += speedUpBy;
  } else if (ballSpeedX < 0 && ballSpeedX > -10) {
    ballSpeedX -= speedUpBy;
  }
  if (ballSpeedY > 0 && ballSpeedY < 10) {
    ballSpeedY += speedUpBy;
  } else if (ballSpeedY < 0 && ballSpeedY > -10) {
    ballSpeedY -= speedUpBy;
  }
}

function table() {
  // draw table function
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cw, ch);
  ctx.fillStyle = "white";
  for (let linePosition = 10; linePosition < ch; linePosition += 15) {
    ctx.fillRect(cw / 2 - 2, linePosition, 4, 7);
  }
}

function drawStats() {
  // draw stats function
  ctx.fillStyle = "white";
  ctx.textAlign = "left";
  ctx.font = "bold 20px Calibri";
  ctx.fillText(player_points, 5, 15);
  ctx.textAlign = "right";
  ctx.font = "bold 20px Calibri";
  ctx.fillText(computer_points, cw - 5, 15);
}

function drawStatsAtEnd() {
  // draw stats after end of round
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.font = "bold 30px Calibri";
  ctx.fillText("End of round", cw / 2, ch / 2 - 50);
  ctx.fillText(player_points + " / " + computer_points, cw / 2, ch / 2);
  ctx.font = "15px Calibri";
  ctx.fillText("Press SPACE to continoue", cw / 2, ch / 2 + 40);
}

function endGame(who_win) {
  // draw after game stats
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.font = "bold 30px Calibri";
  if (who_win) {
    ctx.fillText("You Win!", cw / 2, ch / 2);
  } else {
    ctx.fillText("You Lose!", cw / 2, ch / 2);
  }
}

function ball() {
  drawStats();
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  // point for computer and end of round
  if (ballX <= ballSize) {
    clearInterval(interval);
    game_running = false;
    computer_points += 1;
    if (computer_points >= 5) {
      endGame(false);
    } else drawStatsAtEnd();

    // point for player and end of round
  } else if (ballX >= cw - ballSize) {
    clearInterval(interval);
    game_running = false;
    player_points += 1;
    if (player_points >= 5) {
      endGame(true);
    } else drawStatsAtEnd();
  }

  if (
    ballX <= racketPosXPlayer1 + racketWidth + ballSize / 2 &&
    ballY > racketPosYPlayer1 &&
    ballY < racketPosYPlayer1 + racketHeight
  ) {
    ballSpeedX = -ballSpeedX; // bounce from player racket
    speedUp();
  } else if (
    ballX >= racketPosXPlayer2 - ballSize / 2 &&
    ballY > racketPosYPlayer2 &&
    ballY < racketPosYPlayer2 + racketHeight
  ) {
    ballSpeedX = -ballSpeedX; // bounce from computer racket
    speedUp();
  }
  // bounce from wall
  if (ballY <= ballSize / 2 || ballY >= ch - ballSize / 2) {
    ballSpeedY = -ballSpeedY;
    speedUp();
  }
  ballX += ballSpeedX;
  ballY += ballSpeedY;
}

function player1() {
  // bounding box of racket on y
  if (racketPosYPlayer1 <= 0) {
    racketPosYPlayer1 = 0;
  } else if (racketPosYPlayer1 + racketHeight >= ch) {
    racketPosYPlayer1 = ch - racketHeight;
  }
  ctx.fillStyle = "white";
  // drawing racket of player
  ctx.fillRect(racketPosXPlayer1, racketPosYPlayer1, racketWidth, racketHeight);
  canvas.addEventListener("mousemove", playerPosition);
}

function player2() {
  // computer
  ctx.fillStyle = "white";
  ctx.fillRect(racketPosXPlayer2, racketPosYPlayer2, racketWidth, racketHeight);
  rightRacket();

  // bounding box of racket on y
  if (racketPosYPlayer2 <= 0) {
    racketPosYPlayer2 = 0;
  } else if (racketPosYPlayer2 + racketHeight >= ch) {
    racketPosYPlayer2 = ch - racketHeight;
  }
}

function rightRacket() {
  const middlePaddle = racketPosYPlayer2 + racketHeight / 2;

  if (ballX > cw / 2) {
    // faster move of racket if ball is far
    if (middlePaddle - ballY > 200) {
      racketPosYPlayer2 -= 25;
    } else if (middlePaddle - ballY > 50) {
      racketPosYPlayer2 -= 15;
    }
    //if ball is under racket
    else if (middlePaddle - ballY < -200) {
      racketPosYPlayer2 += 25;
    } else if (middlePaddle - ballY < -50) {
      racketPosYPlayer2 += 15;
    }
  }

  // slow move if ball is on player side
  if (ballX <= cw / 2 && ballX > 100) {
    if (middlePaddle - ballY > 100) {
      racketPosYPlayer2 -= 5;
    }
    if (middlePaddle - ballY < -100) {
      racketPosYPlayer2 += 5;
    }
  }
}

function game() {
  table();
  ball();
  player1();
  player2();
}
