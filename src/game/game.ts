import GameEntity from "../pxlr/core/game-entity";
import {Dimension} from "../pxlr/utils/types";
import LevelView from "./views/level";

export default class Game extends GameEntity {

  levelView: LevelView;

  constructor(public dimensions: Dimension) {
    super(null);

    this.levelView = new LevelView(this, this.dimensions);
    this.addChild(this.levelView);
  }
}
