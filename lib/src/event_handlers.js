import { playButton, playAgainButton } from "./index.js";

export default class EventHandlers {
  constructor(game) {
    this.startTime = null;
    this.elapsed = null;
    this.game = game;
    this.keydownHandler = this.keydownHandler.bind(this);
    this.keyupHandler = this.keyupHandler.bind(this);
  }

  keydownHandler(e) {
    e.preventDefault();
    if (e.keyCode === 32) {
      if (this.game.started) {
        this.startTime = this.startTime || Date.now();
        this.game.shotHelpers.startTime = this.startTime;
        if (this.game.basketball.isThrown) this.startTime = null;
      }
    }
    if (e.keyCode === 37) {
      if (this.game.started) {
        this.game.player.x += -8;
        this.game.basketball.x += -8;
      }
    }
    if (e.keyCode === 39) {
      if (this.game.started) {
        this.game.player.x += 8;
        this.game.basketball.x += 8;
      }
    }
    if (e.keyCode === 38) {
      if (this.game.started) {
        this.game.shotAngle = Math.min(this.game.shotAngle + 2, 88);
      }
    }
    if (e.keyCode === 40) {
      if (this.game.started) {
        this.game.shotAngle = Math.max(this.game.shotAngle - 2, 0);
      }
    }
  }

  keyupHandler(e) {
    e.preventDefault();
    if (e.keyCode === 32) {
      if (this.game.started && !this.game.basketball.isThrown) {
        this.elapsed = (Date.now() - this.startTime) / 1000;
        this.elapsed = Math.min(this.elapsed, 0.75);
        this.startTime = null;
        this.game.initialVelocites = this.game.basketball.getInitialVelocity(
          this.elapsed,
          this.game.shotAngle
        );
        this.game.vX = this.game.initialVelocites.vX;
        this.game.vY = this.game.initialVelocites.vY;
        this.game.basketball.isThrown = true;
        this.game.t = 0;
      }
    }
    if (e.keyCode === 37) {
      if (this.game.started) {
        this.game.player.x += -8;
        this.game.basketball.x += -8;
      }
    }
    if (e.keyCode === 39) {
      if (this.game.started) {
        this.game.player.x += 8;
        this.game.basketball.x += 8;
      }
    }
    if (e.keyCode === 38) {
      if (this.game.started) {
        this.game.shotAngle = Math.min(this.game.shotAngle + 2, 88);
      }
    }
    if (e.keyCode === 40) {
      if (this.game.started) {
        this.game.shotAngle = Math.max(this.game.shotAngle - 2, 0);
      }
    }

    if (e.keyCode === 13) {
      if (this.game.over()) playAgainButton.click();
      else playButton.click();
    }
  }
}
