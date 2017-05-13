import GameEntity from "../../pxlr/core/game-entity";
import Camera from "./camera";
import {Coordinate} from "../../pxlr/utils/types";
import Sprite from "../../pxlr/core/sprite";
import CellGrid from "../../pxlr/core/cell-grid";
import {BACKGROUND} from "../../pxlr/utils/layers";
import Color from "../../pxlr/core/color";

export default class LevelTile extends GameEntity {

  center: Coordinate;
  position: Coordinate;
  tileSize: number;

  border_tile: boolean = false;

  constructor(parent, public camera: Camera, public sprite: Sprite, public gridPosition: Coordinate) {
    super(parent);

    this.tileSize = sprite.dimensions.width;

    this.center = {
      x: this.gridPosition.x * this.tileSize,
      y: this.gridPosition.y * this.tileSize
    };
    this.position = {
      x: this.center.x - Math.floor(this.sprite.dimensions.width / 2),
      y: this.center.y - Math.floor(this.sprite.dimensions.height / 2)
    };
  }

  render(frame: CellGrid<Color>): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, BACKGROUND);
  }
}
