import LevelTile from "../level-screen/level-tile";
import Camera from "../level-screen/camera";
import {Coordinate} from "../../pxlr/utils/types";
import GameEntity from "../../pxlr/core/game-entity";

type LevelTileImpl = new(parent: GameEntity, camera: Camera, gridPosition: Coordinate) => LevelTile;

export interface LevelDefinition {
  tiles: LevelTileImpl[][];
  cursorStart: Coordinate;
}
