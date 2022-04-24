export default class Player {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "./assets/images/player.svg";
  }

  draw() {
    const imgWidth = 156;
    const imgHeight = 324;
    this.ctx.drawImage(
      this.image,
      380,
      180,
      imgWidth,
      imgHeight,
      this.x,
      this.y,
      imgWidth - 30,
      imgHeight
    );
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
