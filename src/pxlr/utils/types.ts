import CellGrid from "../core/cell-grid";
import Sprite from "../core/sprite";

export type InputMap = {
  keyboard: any,
  gamepad: any
};

export type Coordinate = {
  x: number,
  y: number
};

export type Dimension = {
  readonly width: number,
  readonly height: number
};

export interface Color {
  index: number;
  clear: boolean;

  setR(r: number): void;
  setG(g: number): void;
  setB(b: number): void;

  getR(): number;
  getG(): number;
  getB(): number;

  getColor(): string;
  copyFromColor(c: Color): void;
}

export type Ordinal = 0 | 1 | 2 | 3;

export const ORDINALS = {
  NORTH: 0 as Ordinal,
  EAST: 1 as Ordinal,
  SOUTH: 2 as Ordinal,
  WEST: 3 as Ordinal,
};

export interface Camera {
  mapToScreenCoord(coordinate: Coordinate): Coordinate;
  isVisible(point: Coordinate, size: Dimension);
  renderEntity(frame: CellGrid<Color>, sprite: Sprite, position: Coordinate, layer: number);
}
