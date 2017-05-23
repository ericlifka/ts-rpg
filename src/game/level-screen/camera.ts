import GameEntity from "../../pxlr/core/game-entity";
import {Color, Coordinate, Dimension} from "../../pxlr/utils/types";
import CellGrid from "../../pxlr/core/cell-grid";
import Sprite from "../../pxlr/core/sprite";

export default class Camera extends GameEntity {

  position: Coordinate;
  centerOffset: Coordinate;

  animationActive: boolean = false;
  animationCounter: number = 0;
  animationEnd: number = 0;
  animationStartPosition: Coordinate;
  animationEndPosition: Coordinate;
  animationDelta: Coordinate;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.position = {x: 0, y: 0};
    this.centerOffset = {
      x: Math.floor(dimensions.width / 2),
      y: Math.floor(dimensions.height / 2)
    };
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);

    if (this.animationActive) {
      this.animationCounter += dtime;

      if (this.animationCounter > this.animationEnd) {
        this.animationActive = false;
        this.position.x = this.animationEndPosition.x;
        this.position.y = this.animationEndPosition.y;

      } else {
        let ratio = this.animationCounter / this.animationEnd;
        this.position.x = Math.floor(this.animationStartPosition.x + ratio * this.animationDelta.x);
        this.position.y = Math.floor(this.animationStartPosition.y + ratio * this.animationDelta.y);
      }
    }
  }

  mapToScreenCoord(coord: Coordinate): Coordinate {
    return {
      x: this.centerOffset.x + coord.x - this.position.x,
      y: this.centerOffset.y + coord.y - this.position.y
    };
  }

  isSpriteVisible(coord: Coordinate, dimension: Dimension) {
    return coord.x + dimension.width >= 0 &&
      coord.x <= this.dimensions.width &&
      coord.y + dimension.height >= 0 &&
      coord.y <= this.dimensions.height;
  }

  animateTo(coord: Coordinate, time: number) {
    this.animationActive = true;
    this.animationCounter = 0;
    this.animationEnd = time;
    this.animationStartPosition = {x: this.position.x, y: this.position.y};
    this.animationEndPosition = coord;
    this.animationDelta = {
      x: this.animationEndPosition.x - this.animationStartPosition.x,
      y: this.animationEndPosition.y - this.animationStartPosition.y
    };
  }

  moveTo(coord: Coordinate): void {
    this.position.x = coord.x;
    this.position.y = coord.y;
  }

  renderAdjustedEntity(frame: CellGrid<Color>, sprite: Sprite, position: Coordinate, layer: number) {
    let coord = this.mapToScreenCoord(position);
    if (this.isSpriteVisible(coord, sprite.dimensions)) {
      sprite.render(frame, coord, layer);
    }
  }
}
