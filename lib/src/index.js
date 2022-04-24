import Game from "./game.js";
import EventHandlers from "./event_handlers.js";

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame;

export const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
export const cHeight = canvas.height;
export const cWidth = canvas.width;
export const ground = cHeight - cHeight / 4;

let game = new Game(ctx);
const eventHandlers = new EventHandlers(game);

export const playButton = document.getElementById("play-button");
export const playAgainButton = document.getElementById("play-again-button");

const handlePlay = () => {
  document.getElementsByClassName("start-screen")[0].classList.add("hidden");
  game.play();
  window.requestAnimationFrame(game.draw);
};

const handlePlayAgain = () => {
  const gameOverScreen = document.getElementsByClassName("end-screen")[0];
  game.reset();
  gameOverScreen.classList.add("hidden");
  window.requestAnimationFrame(game.draw);
};

playButton.addEventListener("click", handlePlay);
playAgainButton.addEventListener("click", handlePlayAgain);
document.addEventListener("keydown", eventHandlers.keydownHandler);
document.addEventListener("keyup", eventHandlers.keyupHandler);

game.drawScene();
