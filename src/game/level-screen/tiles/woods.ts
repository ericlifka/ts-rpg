import LevelTile from "../level-tile";
import Camera from "../camera";
import {Coordinate} from "../../../pxlr/utils/types";
import {createSprite as pinesSprite} from "../../sprites/tiles/pines";

export default class WoodsTile extends LevelTile {
  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, pinesSprite(), gridPosition);

    this.border_tile = true;
  }
}
