import LevelTile from "../level-tile";
import Camera from "../camera";
import {Coordinate} from "../../../pxlr/utils/types";
import {GRASS_TILE_SPRITE} from "../../sprites/tiles/grass";

export default class GrassTile extends LevelTile {
  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, GRASS_TILE_SPRITE, gridPosition);

    this.passable = true;
  }
}
