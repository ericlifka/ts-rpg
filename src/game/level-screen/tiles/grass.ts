import LevelTile from "../level-tile";
import Camera from "../camera";
import {Coordinate} from "../../../pxlr/utils/types";
import {GRASS_EMPTY_TILE_SPRITE} from "../../sprites/tiles/grass_empty";
import {GRASS_SPARSE_TILE_SPRITE} from "../../sprites/tiles/grass_sparse";
import {GRASS_THICK_TILE_SPRITE} from "../../sprites/tiles/grass_thick";
import {randomElement} from "../../../pxlr/utils/random";

const SPRITES = [
  GRASS_EMPTY_TILE_SPRITE,
  GRASS_EMPTY_TILE_SPRITE,
  GRASS_SPARSE_TILE_SPRITE,
  GRASS_THICK_TILE_SPRITE
];

export default class GrassTile extends LevelTile {
  constructor(parent, camera: Camera, gridPosition: Coordinate) {
    super(parent, camera, randomElement(SPRITES), gridPosition);
  }
}
