import GameEntity from "../../pxlr/core/game-entity";
import {Coordinate, Dimension, Ordinal, ORDINALS} from "../../pxlr/utils/types";
import {forestMeadowLevel} from "../level-definitions/forest-meadow";
import Character from "../components/character";
import CursorCamera from "../components/cursor-camera";
import {Game} from "../models/game";
import {copyCoord} from "../../pxlr/utils/vectors";
import {SWORD_GIRL_ANIMATIONS} from "../sprites/chatacters/sword-girl";

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
        sprites: SWORD_GIRL_ANIMATIONS(),
        facing: ORDINALS.NORTH
      },
    };

    this.camera = this.addChild(
      new CursorCamera(this)
        .bindToModel(this.model.camera));

    this.addChild(
      new Character(this)
        .bindToModel(this.model.player));
  }

  movePlayer(newPosition: Coordinate) {
    this.model.player.position.x = newPosition.x;
    this.model.player.position.y = newPosition.y;
  }

  turnPlayer(facing: Ordinal) {
    this.model.player.facing = facing;
  }
}
