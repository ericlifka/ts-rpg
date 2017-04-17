import LevelTile from "../level-tile";
import Camera from "../camera";
import CellGrid from "../../../pxlr/core/cell-grid";
import Sprite from "../../../pxlr/core/sprite";
import {Coordinate} from "../../../pxlr/utils/types";
import {DECORATION} from "../../../pxlr/utils/layers";
import {createTreeSprite} from "../../sprites/environment/tree";
import {createEmptyTileSprite} from "../../sprites/tiles/empty";

export default class WoodsTile extends LevelTile {

  tree: Sprite;

  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, createEmptyTileSprite(), gridPosition);

    this.passable = false;
    this.tree = createTreeSprite();
  }

  render(frame: CellGrid): void {
    super.render(frame);

    let coord = this.camera.mapToScreenCoord(this.position);
    this.tree.render(frame, coord, DECORATION);
    this.tree.render(frame, {x: coord.x + 16, y: coord.y}, DECORATION);
    this.tree.render(frame, {x: coord.x, y: coord.y + 16}, DECORATION);
    this.tree.render(frame, {x: coord.x + 16, y: coord.y + 16}, DECORATION);
  }
}
