abstract class Color {
  index: number;
  constructor(public r: number, public g: number, public b: number) {
    this.index = -1;
  }

  setR(newR): void {
    this.r = Math.floor(newR) % 256;
  }

  getR(): number {
    return this.r;
  }

  setG(newG): void {
    this.g = Math.floor(newG) % 256;
  }

  getG(): number {
    return this.g;
  }

  setB(newB): void {
    this.b = Math.floor(newB) % 256;
  }

  getB(): number {
    return this.b;
  }

  getColor(): string {
    return `#${this.r}${this.g}${this.b}`;
  }

  copyFromColor(color: Color): void {
    this.setR(color.getR());
    this.setG(color.getG());
    this.setB(color.getB());
  }
}

export default Color;
