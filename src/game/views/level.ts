import GameEntity from "../../pxlr/core/game-entity";
import {copyCoord, Dimension} from "../../pxlr/utils/types";
import {forestMeadowLevel} from "../level-definitions/forest-meadow";
import Character from "../components/character";
import {SWORD_GIRL_CHARACTER_SPRITE} from "../sprites/chatacters/sword-girl";
import CursorCamera from "../components/cursor-camera";

export default class LevelView extends GameEntity {

  public model;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    let levelSpec = forestMeadowLevel;

    this.model = {
      cursor: { position: copyCoord(levelSpec.cursorStart) },
      camera: {},
      tiles: [],
      characters: [
        { position: copyCoord(levelSpec.cursorStart), sprite: SWORD_GIRL_CHARACTER_SPRITE }
      ],
      units: []
    };

    let camera = new CursorCamera(this).bindToModel(this.model.camera);
    this.addChild(camera);
    this.camera = camera;

    let character = new Character(this).bindToModel(this.model.characters[0]);
    this.addChild(character);
  }
}
