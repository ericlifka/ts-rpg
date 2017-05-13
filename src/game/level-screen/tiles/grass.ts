import LevelTile from "../level-tile";
import Camera from "../camera";
import {Coordinate} from "../../../pxlr/utils/types";
import {createSprite as emptyGrassSprite} from "../../sprites/tiles/grass_empty";
import {createSprite as sparseGrassSprite} from "../../sprites/tiles/grass_sparse";
import {createSprite as thickGrassSprite} from "../../sprites/tiles/grass_thick";
import {randomElement} from "../../../pxlr/utils/random";

const SPRITES = [
  emptyGrassSprite,
  sparseGrassSprite,
  thickGrassSprite
];

export default class GrassTile extends LevelTile {
  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, randomElement(SPRITES)(), gridPosition);
  }
}
