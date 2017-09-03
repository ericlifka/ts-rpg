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

export function copyCoord(target: Coordinate): Coordinate {
  return {x: target.x, y: target.y};
}
export function addCoords(left: Coordinate, right: Coordinate): Coordinate {
  return {
    x: left.x + right.x,
    y: left.y + right.y
  };
}
export function coordNeighbors(target: Coordinate): Coordinate[] {
  /* Can't put this in types so far as I know, but for convenience these are returned in the CSS order: top, right, bottom, left */
  return [
    addCoords(target, { x: 0, y: 1 }),
    addCoords(target, { x: 1, y: 0 }),
    addCoords(target, { x: 0, y: -1 }),
    addCoords(target, { x: -1, y: 0 })
  ];
}
export const ORDINALS = {
  NORTH: 0 as Ordinal,
  EAST: 1 as Ordinal,
  SOUTH: 2 as Ordinal,
  WEST: 3 as Ordinal,
};
export type Ordinal = 0 | 1 | 2 | 3;

export function copyDimension(target: Dimension): Dimension {
  return {width: target.width, height: target.height};
}

export interface Camera {
  mapToScreenCoord(coordinate: Coordinate): Coordinate;
  isVisible(point: Coordinate, size: Dimension);
  renderEntity(frame: CellGrid<Color>, sprite: Sprite, position: Coordinate, layer: number);
}
