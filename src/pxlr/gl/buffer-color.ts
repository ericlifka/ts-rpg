import {Color} from "../utils/types";

export default class BufferColor implements Color {
  public index: number;
  public opacity: number;

  private r: number = 0;
  private g: number = 0;
  private b: number = 0;

  constructor(public vertexGroup, public colorBufferOffset) {
    this.opacity = 1.0;
    this.index = -1;
  }

  setR(newR) {
    this.r = newR;
    this.updateColorBuffers(newR, 0);
  }

  setG(newG) {
    this.g = newG;
    this.updateColorBuffers(newG, 1);
  }

  setB(newB) {
    this.b = newB;
    this.updateColorBuffers(newB, 2);
  }

  getR(): number {
    throw new Error('Method not implemented.');
  }

  getG(): number {
    throw new Error('Method not implemented.');
  }

  getB(): number {
    throw new Error('Method not implemented.');
  }

  getColor(): string {
    throw new Error('Method not implemented.');
  }

  updateColorBuffers(colorValue, offset) {
    for (let index = offset; index <= 14; index += 4) {
      this.vertexGroup.generatedColors[this.colorBufferOffset + index] = colorValue;
    }
  }

  copyFromColor(color) {
    let r = color.getR();
    let g = color.getG();
    let b = color.getB();

    this.setR(r / 255.0);
    this.setG(g / 255.0);
    this.setB(b / 255.0);
  }
}

export class FakeBufferColor extends BufferColor {
  constructor(public x: number, public y: number) {
    super(null, null);
  }
  setR(newR) { }
  setG(newG) { }
  setB(newB) { }
  copyFromColor(color) { }
}
