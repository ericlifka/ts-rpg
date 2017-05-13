import {Color} from "../utils/types";

export default class RGBColor implements Color {
  public index: number = -1;
  public clear: boolean = false;

  private r: number;
  private g: number;
  private b: number;

  constructor(r = 0, g = 0, b = 0) {
    this.setR(r);
    this.setG(g);
    this.setB(b);
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
    return `#${this.getR()}${this.getG()}${this.getB()}`;
  }

  copyFromColor(color: Color): void {
    this.setR(color.getR());
    this.setG(color.getG());
    this.setB(color.getB());
  }

  setFromHex(hex: string): void {
    if (!hex) {
      this.clear = true;
      return;
    }

    if (hex.length === 7 || hex.length === 4) {
      hex = hex.slice(1);
    }

    if (hex.length === 3) {
      hex = hex
        .split('')
        .map(char => char + char)
        .join('');
    }

    if (hex.length !== 6) {
      throw new Error(`Invalid hex string: ${hex}`);
    }

    this.setR(parseInt(hex.slice(0, 2), 16));
    this.setG(parseInt(hex.slice(2, 4), 16));
    this.setB(parseInt(hex.slice(4, 6), 16));
  }

  clone(): RGBColor {
    return new RGBColor(this.getR(), this.getG(), this.getB());
  }

  static fromHex(hex: string): RGBColor {
    let color = new RGBColor();
    color.setFromHex(hex);
    return color;
  }
}
