import GameEntity from "../../pxlr/core/game-entity";
import {Coordinate} from "../../pxlr/utils/types";
import Camera from "./camera";
import {createCursorSprite} from "../sprites/tiles/cursor";
import Sprite from "../../pxlr/core/sprite";
import CellGrid from "../../pxlr/core/cell-grid";

export default class Cursor extends GameEntity {

  sprite: Sprite;
  center: Coordinate;
  position: Coordinate;
  tileSize: number;

  constructor(parent, public camera: Camera, public gridPosition: Coordinate) {
    super(parent);

    this.sprite = createCursorSprite();
    this.tileSize = this.sprite.dimensions.width;

    this.center = {
      x: this.gridPosition.x * this.tileSize,
      y: this.gridPosition.y * this.tileSize
    };
    this.position = {
      x: this.center.x - Math.floor(this.tileSize / 2),
      y: this.center.y - Math.floor(this.tileSize / 2)
    };
  }

  render(frame: CellGrid): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, 10);
  }
}
