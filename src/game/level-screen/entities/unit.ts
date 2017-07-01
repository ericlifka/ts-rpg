import GameEntity from "../../../pxlr/core/game-entity";
import Sprite from "../../../pxlr/core/sprite";
import LevelTile from "../level-tile";
import Camera from "../camera";
import CellGrid from "../../../pxlr/core/cell-grid";
import {addCoords, Color, Coordinate} from "../../../pxlr/utils/types";
import {CHARACTER} from "../../../pxlr/utils/layers";
import {Unit} from "../../models/unit";

export default class Character extends GameEntity {
  position: Coordinate;
  highlightPosition: Coordinate;
  displayOffset: Coordinate;
  highlightSprite: Sprite;

  active: boolean = false;

  model: Unit;

  constructor(parent, public camera: Camera, public sprite: Sprite) {
    super(parent);
    this.displayOffset = {x: 9, y: 6};
    this.highlightSprite = Sprite.createHighlight(this.sprite);

    this.model = {
      movement: 3
    };
  }

  moveToTile(tile: LevelTile) {
    tile.addEntityToTile(this);
    this.position = addCoords(tile.position, this.displayOffset);
    this.highlightPosition = addCoords(this.position, {x: 1, y: 1});
  }

  render(frame: CellGrid<Color>): void {
    if (this.active) {
      this.camera.renderAdjustedEntity(frame, this.highlightSprite, this.position, CHARACTER);
    }
    this.camera.renderAdjustedEntity(frame, this.sprite, this.highlightPosition, CHARACTER);
  }

  toggleActive() {
    this.active = !this.active;

    if (this.active) {
      this.parent.sendEvent('showMovementTemplateForUnit', this);
    } else {
      this.parent.sendEvent('clearMovementTemplates');
    }
  }
}
