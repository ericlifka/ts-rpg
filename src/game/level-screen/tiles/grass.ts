import LevelTile from "../level-tile";
import Camera from "../camera";
import {Coordinate} from "../../../pxlr/utils/types";
import {createGrassTileSprite} from "../../sprites/tiles/grass";

export default class GrassTile extends LevelTile {
  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, createGrassTileSprite(), gridPosition);

    this.passable = true;
  }
}
