import GameEntity from "../../../pxlr/core/game-entity";
import Sprite from "../../../pxlr/core/sprite";
import {createSprite} from '../../sprites/chatacters/sword-girl';
import LevelTile from "../level-tile";
import Camera from "../camera";
import CellGrid from "../../../pxlr/core/cell-grid";
import {Color, Coordinate, copyCoord} from "../../../pxlr/utils/types";
import {CHARACTER} from "../../../pxlr/utils/layers";

export default class Character extends GameEntity {
  public sprite: Sprite;
  position: Coordinate;

  constructor(parent, public camera: Camera) {
    super(parent);

    this.sprite = createSprite();
  }

  moveToTile(tile: LevelTile) {
    this.position = copyCoord(tile.position);
  }

  render(frame: CellGrid<Color>): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, CHARACTER);
  }
}
