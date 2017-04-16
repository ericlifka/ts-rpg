import GameEntity from "../../pxlr/core/game-entity";
import {Coordinate, Dimension} from "../../pxlr/utils/types";

export default class Camera extends GameEntity {

  position: Coordinate;
  centerOffset: Coordinate;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.position = {x: 0, y: 0};
    this.centerOffset = {
      x: Math.floor(dimensions.width / 2),
      y: Math.floor(dimensions.height / 2)
    };
  }

  mapToScreenCoord(coord: Coordinate): Coordinate {
    return {
      x: this.centerOffset.x + coord.x - this.position.x,
      y: this.centerOffset.y + coord.y - this.position.y
    };
  }

  moveTo(coord: Coordinate): void {
    this.position.x = coord.x;
    this.position.y = coord.y;
  }
}
