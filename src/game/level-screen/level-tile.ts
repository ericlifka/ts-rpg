import GameEntity from "../../pxlr/core/game-entity";
import Camera from "./camera";
import {Coordinate} from "../../pxlr/utils/types";
import Sprite from "../../pxlr/core/sprite";
import CellGrid from "../../pxlr/core/cell-grid";

export default class LevelTile extends GameEntity {

  position: Coordinate;
  tileSize: number;

  constructor(parent, public camera: Camera, public sprite: Sprite, public gridPosition: Coordinate) {
    super(parent);

    this.tileSize = sprite.dimensions.width;

    this.position = {
      x: this.gridPosition.x * this.tileSize - Math.floor(sprite.dimensions.width / 2),
      y: this.gridPosition.y * this.tileSize - Math.floor(sprite.dimensions.height / 2)
    };
  }

  render(frame: CellGrid): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, 1);
  }
}
