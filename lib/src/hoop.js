import { ground, cHeight, cWidth } from "./index.js";

export default class Hoop {
  constructor(ctx) {
    this.ctx = ctx;
    this.rim = {
      x: cWidth - 144,
      y: cHeight - 550,
      width: 80,
      height: 5,
      type: "Rim",
    };

    this.backboard = {
      x: cWidth - 64,
      y: cHeight - 650,
      width: 8,
      height: 140,
      type: "Backboard",
    };
  }

  draw() {
    this.drawPole();
    this.drawBackboard();
    this.drawNet();
    this.drawRim();
  }

  drawRim() {
    const { x, y, width, height } = this.rim;
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawNet() {
    const netLength = 64;
    const { x, y, width } = this.rim;
    const startX = x + 2;
    const endX = x + width - 2;
    const startY = y + 2;
    const endY = y + netLength;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = "1";

    this.ctx.moveTo(startX, startY);
    this.ctx.lineTo(x + 16, endY);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 8, startY);
    this.ctx.lineTo(x + 24, endY);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 16, startY);
    this.ctx.lineTo(x + 32, endY);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 24, startY);
    this.ctx.lineTo(x + 40, endY);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 32, startY);
    this.ctx.lineTo(x + 48, endY);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 40, startY);
    this.ctx.lineTo(x + 56, endY);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 48, startY);
    this.ctx.lineTo(x + 64, endY);
    this.ctx.stroke();

    this.ctx.moveTo(startX + 56, startY);
    this.ctx.lineTo(x + 68, endY - 16);
    this.ctx.stroke();
    this.ctx.moveTo(startX + 64, startY);
    this.ctx.lineTo(x + 72, endY - 36);
    this.ctx.stroke();
    // this.ctx.moveTo(startX+62, startY);
    // this.ctx.lineTo(x+68, endY-52);
    // this.ctx.stroke();

    // this.ctx.moveTo(cWidth-100, startY);
    // this.ctx.lineTo(cWidth-110, y+58);
    // this.ctx.stroke();
    this.ctx.moveTo(endX - 64, startY);
    this.ctx.lineTo(x + width - 72, endY - 36);
    this.ctx.stroke();
    this.ctx.moveTo(endX - 56, startY);
    this.ctx.lineTo(x + width - 68, endY - 16);
    this.ctx.stroke();

    this.ctx.moveTo(endX - 48, startY);
    this.ctx.lineTo(x + width - 64, endY);
    this.ctx.stroke();
    this.ctx.moveTo(endX - 40, startY);
    this.ctx.lineTo(x + width - 56, endY);
    this.ctx.stroke();
    this.ctx.moveTo(endX - 32, startY);
    this.ctx.lineTo(x + width - 48, endY);
    this.ctx.stroke();
    this.ctx.moveTo(endX - 24, startY);
    this.ctx.lineTo(x + width - 40, endY);
    this.ctx.stroke();
    this.ctx.moveTo(endX - 16, startY);
    this.ctx.lineTo(x + width - 32, endY);
    this.ctx.stroke();
    this.ctx.moveTo(endX - 8, startY);
    this.ctx.lineTo(x + width - 24, endY);
    this.ctx.stroke();
    this.ctx.moveTo(endX, startY);
    this.ctx.lineTo(x + width - 16, endY);
    this.ctx.stroke();

    this.ctx.closePath();
  }

  drawBackboard() {
    const { x, y, width, height } = this.backboard;
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height / 7);
    this.ctx.fillStyle = "rgb(2, 162, 255)";
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.rect(x, y + (height * 6) / 7, width, height / 7);
    this.ctx.fillStyle = "rgb(2, 162, 255)";
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPole() {
    const poleY = cHeight - 570;
    this.ctx.beginPath();
    this.ctx.rect(cWidth - 60, poleY, 40, 12);
    this.ctx.rect(cWidth - 25, poleY, 12, ground - 120);
    this.ctx.fillStyle = "gray";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
