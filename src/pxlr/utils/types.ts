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
  return [
    addCoords(target, { x: 1, y: 0 }),
    addCoords(target, { x: 0, y: 1 }),
    addCoords(target, { x: -1, y: 0 }),
    addCoords(target, { x: 0, y: -1 })
  ];
}

export function copyDimension(target: Dimension): Dimension {
  return {width: target.width, height: target.height};
}
