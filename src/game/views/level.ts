import GameEntity from "../../pxlr/core/game-entity";
import {copyCoord, Dimension} from "../../pxlr/utils/types";
import {forestMeadowLevel} from "../level-definitions/forest-meadow";
import Camera from "../components/camera";

export default class LevelView extends GameEntity {

  public model;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    let levelSpec = forestMeadowLevel;

    this.model = {
      cursor: { position: copyCoord(levelSpec.cursorStart) },
      camera: {},
      tiles: [],
      characters: [],
      units: []
    };

    let camera = new Camera(this).bindToModel(this.model.camera);
    this.addChild(camera);
    this.camera = camera;


  }
}
