export default class ShotHelpers {
  constructor(ctx, basketball) {
    this.ctx = ctx;
    this.basketball = basketball;
    this.startTime = null;
    this.elapsed = 0;
  }

  drawArrow(shotAngle) {
    const startX = this.basketball.x + 42;
    const startY = this.basketball.y - 12;
    this.ctx.beginPath();
    this.ctx.moveTo(startX, startY);
    const endX = startX + 50 * Math.cos((shotAngle * Math.PI) / 180);
    const endY = startY - 50 * Math.sin((shotAngle * Math.PI) / 180);
    this.ctx.lineTo(endX, endY);
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = "3";
    this.ctx.stroke();
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawPowerBar() {
    const barX = 20;
    const barY = 240;
    const height = 300;
    const width = 50;
    if (this.startTime) {
      if (!this.basketball.isThrown)
        this.elapsed = (Date.now() - this.startTime) / 1000;
    }
    this.elapsed = Math.min(this.elapsed, 0.75);
    const displacement = 300 - 400 * this.elapsed;
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(barX, barY, width, height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(barX, barY, width, height);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(barX, barY + displacement, width, 400 * this.elapsed);
  }
}
