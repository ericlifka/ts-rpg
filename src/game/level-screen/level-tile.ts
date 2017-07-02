import GameEntity from "../../pxlr/core/game-entity";
import Camera from "./camera";
import {Color, Coordinate} from "../../pxlr/utils/types";
import Sprite from "../../pxlr/core/sprite";
import CellGrid from "../../pxlr/core/cell-grid";
import {BACKGROUND, DECORATION} from "../../pxlr/utils/layers";
import {BORDER_BOTTOM, BORDER_LEFT, BORDER_RIGHT, BORDER_TOP} from "../sprites/interface/highlight-borders";

type BorderMarker = {
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean
};

export default class LevelTile extends GameEntity {

  containedEntity: GameEntity;

  center: Coordinate;
  position: Coordinate;
  tileSize: number;

  border_tile: boolean = false;

  showHighlightBorders: boolean = false;
  visibleHighlightBorders: BorderMarker;

  constructor(parent, public camera: Camera, public sprite: Sprite, public gridPosition: Coordinate) {
    super(parent);

    this.resetHighlightBorders();
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
    this.camera.renderAdjustedEntity(frame, this.sprite, this.position, BACKGROUND);

    if (this.showHighlightBorders) {
      this.camera.renderAdjustedEntity(frame, BORDER_TOP, this.position, DECORATION);
      this.camera.renderAdjustedEntity(frame, BORDER_RIGHT, this.position, DECORATION);
      this.camera.renderAdjustedEntity(frame, BORDER_BOTTOM, this.position, DECORATION);
      this.camera.renderAdjustedEntity(frame, BORDER_LEFT, this.position, DECORATION);
    }
  }

  addEntityToTile(entity: GameEntity) {
    this.containedEntity = entity;
  }

  clearEntityFromTile() {
    this.containedEntity = null;
  }

  resetHighlightBorders() {
    this.visibleHighlightBorders = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
  }
}
