import Color from './color';

export default class RGBColor extends Color {
  clear: boolean;

  constructor(r = 0, g = 0, b = 0) {
    super(r, g, b);

    this.clear = false;
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

  copyFromColor(color: Color): void {
    this.setR(color.getR());
    this.setG(color.getG());
    this.setB(color.getB());
  }

  clone(): RGBColor {
    return new RGBColor(this.getR(), this.getG(), this.getB());
  }

  static fromHex(hex): RGBColor {
    let color = new RGBColor();
    color.setFromHex(hex);
    return color;
  }
}
