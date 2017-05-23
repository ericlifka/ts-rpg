import GameEntity from "../../../pxlr/core/game-entity";
import Sprite from "../../../pxlr/core/sprite";
import LevelTile from "../level-tile";
import Camera from "../camera";
import CellGrid from "../../../pxlr/core/cell-grid";
import {addCoords, Color, Coordinate, copyCoord} from "../../../pxlr/utils/types";
import {CHARACTER} from "../../../pxlr/utils/layers";

export default class Character extends GameEntity {
  position: Coordinate;
  displayOffset: Coordinate;

  constructor(parent, public camera: Camera, public sprite: Sprite) {
    super(parent);
    this.displayOffset = { x: 10, y: 7 };
  }

  moveToTile(tile: LevelTile) {
    this.position = addCoords(tile.position, this.displayOffset);
  }

  render(frame: CellGrid<Color>): void {
    let screenCoord = this.camera.mapToScreenCoord(this.position);
    this.sprite.render(frame, screenCoord, CHARACTER);
  }
}
