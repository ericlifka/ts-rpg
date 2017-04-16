import GameEntity from "../../pxlr/core/game-entity";
import {Coordinate} from "../../pxlr/utils/types";
import Camera from "./camera";
import {createCursorSprite} from "../sprites/tiles/cursor";
import Sprite from "../../pxlr/core/sprite";
import CellGrid from "../../pxlr/core/cell-grid";
import {OVERLAY} from "../../pxlr/utils/layers";

export default class Cursor extends GameEntity {

  sprite: Sprite;
  center: Coordinate;
  position: Coordinate;
  tileSize: number;
  movementClear: number = 0;

  constructor(parent, public camera: Camera, public gridPosition: Coordinate) {
    super(parent);

    this.sprite = createCursorSprite();
    this.tileSize = this.sprite.dimensions.width;

    this.calculatePositionCoordinates();
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);

    this.movementClear += dtime;
    if (this.movementClear > 0) {
      inputs.forEach(input => {
        if (input.INPUT_TYPE === "keyboard") {

          let direction: Coordinate = {x: 0, y: 0};
          if (input.W) {
            console.log("UP!");
            direction.y += 1;
          }
          if (input.A) {
            console.log("LEFT!");
            direction.x -= 1;
          }
          if (input.S) {
            console.log("DOWN!");
            direction.y -= 1;
          }
          if (input.D) {
            console.log("RIGHT!");
            direction.x += 1;
          }

          if (direction.x !== 0 || direction.y !== 0) {
            this.movementClear = -500;
            this.gridPosition.x += direction.x;
            this.gridPosition.y += direction.y;
            this.calculatePositionCoordinates();
          }
        }
      });
    }
  }

  render(frame: CellGrid): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, OVERLAY);
  }

  calculatePositionCoordinates() {
    this.center = {
      x: this.gridPosition.x * this.tileSize,
      y: this.gridPosition.y * this.tileSize
    };
    this.position = {
      x: this.center.x - Math.floor(this.tileSize / 2),
      y: this.center.y - Math.floor(this.tileSize / 2)
    };
  }
}
