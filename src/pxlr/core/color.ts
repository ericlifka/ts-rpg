export default class Color {
  constructor(public r: number, public g: number, public b: number) {
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
}
