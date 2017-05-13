import LevelTile from "../level-tile";
import Camera from "../camera";
import CellGrid from "../../../pxlr/core/cell-grid";
import {Coordinate} from "../../../pxlr/utils/types";
import {DECORATION} from "../../../pxlr/utils/layers";
import {TREE_SPRITE} from "../../sprites/environment/tree";
import {EMPTY_TILE_SPRITE} from "../../sprites/tiles/empty";

import {createSprite as pinesSprite} from "../../sprites/tiles/pines";

export default class WoodsTile extends LevelTile {

  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, pinesSprite(), gridPosition);

    this.passable = false;
  }
  //
  // render(frame: CellGrid): void {
  //   super.render(frame);
  //
  //   let coord = this.camera.mapToScreenCoord(this.position);
  //   TREE_SPRITE.render(frame, coord, DECORATION);
  //   TREE_SPRITE.render(frame, {x: coord.x + 16, y: coord.y}, DECORATION);
  //   TREE_SPRITE.render(frame, {x: coord.x, y: coord.y + 16}, DECORATION);
  //   TREE_SPRITE.render(frame, {x: coord.x + 16, y: coord.y + 16}, DECORATION);
  // }
}
