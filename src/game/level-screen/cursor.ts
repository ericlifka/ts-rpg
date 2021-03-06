import GameEntity from "../../pxlr/core/game-entity";
import {Color, Coordinate, copyCoord} from "../../pxlr/utils/types";
import Camera from "./camera";
import {CURSOR_SPRITE} from "../sprites/cursor";
import Sprite from "../../pxlr/core/sprite";
import CellGrid from "../../pxlr/core/cell-grid";
import {OVERLAY} from "../../pxlr/utils/layers";
import LevelTile from "./level-tile";

export default class Cursor extends GameEntity {

  sprite: Sprite;
  center: Coordinate;
  position: Coordinate;
  tileSize: number;
  halfTileSize: number;

  activeTile: LevelTile;

  constructor(parent, public camera: Camera, public gridPosition: Coordinate) {
    super(parent);

    this.sprite = CURSOR_SPRITE;
    this.tileSize = this.sprite.dimensions.width;
    this.halfTileSize = Math.floor(this.tileSize / 2);

    this.calculatePositionCoordinates();
  }

  render(frame: CellGrid<Color>): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, OVERLAY);
  }

  moveTo(tile: LevelTile): void {
    this.activeTile = tile;
    this.gridPosition = copyCoord(tile.gridPosition);
    this.calculatePositionCoordinates();
  }

  calculatePositionCoordinates() {
    this.center = {
      x: this.gridPosition.x * this.tileSize,
      y: this.gridPosition.y * this.tileSize
    };
    this.position = {
      x: this.center.x - this.halfTileSize,
      y: this.center.y - this.halfTileSize
    };
  }
}
