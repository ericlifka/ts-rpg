import GameEntity from "../../pxlr/core/game-entity";

type Coord = { x: number, y: number };

export default class Camera extends GameEntity {

  dimensions: { width: number, height: number };
  position: Coord;
  centerOffset: Coord;

  constructor(parent, dimensions) {
    super(parent);

    this.dimensions = dimensions;
    this.position = {x: 0, y: 0};
    this.centerOffset = {
      x: Math.floor(dimensions.width / 2),
      y: Math.floor(dimensions.height / 2)
    };
  }

  mapToScreenCoord(coord: Coord): Coord {
    return {
      x: this.centerOffset.x + coord.x - this.position.x,
      y: this.centerOffset.y + coord.y - this.position.y
    };
  }
}
