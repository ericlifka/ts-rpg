import CellGrid from "../pxlr/core/cell-grid";
import GameEntity from "../pxlr/core/game-entity";
import LevelManager from "./level-screen/level-manager";

export default class Game extends GameEntity {
  dimensions: { width: number, height: number };
  levelManager: LevelManager;

  constructor(dimensions) {
    super(null);

    this.dimensions = dimensions;
    this.levelManager = new LevelManager(this, dimensions);

    this.addChild(this.levelManager);
  }
}
