import GameEntity from "../pxlr/core/game-entity";
import LevelManager from "./level-screen/level-manager";
import {Dimension} from "../pxlr/utils/types";

export default class Game extends GameEntity {

  levelManager: LevelManager;

  constructor(public dimensions: Dimension) {
    super(null);

    this.levelManager = new LevelManager(this, this.dimensions);

    this.addChild(this.levelManager);
  }
}
