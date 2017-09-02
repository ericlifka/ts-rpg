import GameEntity from "../../pxlr/core/game-entity";
import {copyCoord, Dimension} from "../../pxlr/utils/types";
import {forestMeadowLevel} from "../level-definitions/forest-meadow";
import Character from "../components/character";
import {SWORD_GIRL_CHARACTER_SPRITE} from "../sprites/chatacters/sword-girl";
import CursorCamera from "../components/cursor-camera";
import {Game} from "../models/game";

export default class LevelView extends GameEntity {

  public model: Game;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    let levelSpec = forestMeadowLevel;

    this.model = {
      camera: {
        position: copyCoord(levelSpec.cursorStart)
      },
      player: {
        position: copyCoord(levelSpec.cursorStart),
        sprite: SWORD_GIRL_CHARACTER_SPRITE
      },
    };

    this.camera = this.addChild(
      new CursorCamera(this)
        .bindToModel(this.model.camera));

    this.addChild(
      new Character(this)
        .bindToModel(this.model.player));
  }

  movePlayer() {
    this.model.player.position.x += 1;
  }
}
