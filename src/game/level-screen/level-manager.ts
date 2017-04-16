import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import Camera from "./camera";
import {createGrassSprite} from "../sprites/tiles/grass";
import Sprite from "../../pxlr/core/sprite";
import {Dimension} from "../../pxlr/utils/types";
import LevelTile from "./level-tile";

export default class LevelManager extends GameEntity {

  camera: Camera;
  grassTile: GameEntity;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);

    this.addChild(this.camera);

    this.grassTile = new LevelTile(this, this.camera, createGrassSprite(), {x: 0, y: 0});
    this.addChild(this.grassTile);

    this.grassTile = new LevelTile(this, this.camera, createGrassSprite(), {x: 1, y: 1});
    this.addChild(this.grassTile);
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);
  }

  render(frame: CellGrid): void {
    super.render(frame);

    frame.cellAt(this.camera.mapToScreenCoord({x: 0, y: 0})).setG(1.0);


  }
}
