import {Coordinate, Dimension} from "./types";

export function floorCoord(coord: Coordinate): Coordinate {
  return {
    x: Math.floor(coord.x),
    y: Math.floor(coord.y)
  };
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

export function copyDimension(target: Dimension): Dimension {
  return {width: target.width, height: target.height};
}

export function normalize(vector: Coordinate, targetLength: number = 1) {
  let {x, y} = vector;
  let length = Math.sqrt(x*x + y*y);
  let proportion = targetLength / length;

  return {
    x: x * proportion,
    y: y * proportion
  };
}
