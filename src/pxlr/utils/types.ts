export type Coordinate = {
  x: number,
  y: number
};
export type Dimension = {
  width: number,
  height: number
};
export interface Color {
  index: number;

  setR(r: number): void;
  setG(g: number): void;
  setB(b: number): void;

  getR(): number;
  getG(): number;
  getB(): number;

  getColor(): string;
  copyFromColor(c: Color): void;
}
