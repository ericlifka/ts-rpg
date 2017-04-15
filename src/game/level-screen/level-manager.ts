import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import Camera from "./camera";
import {createGrassSprite} from "../sprites/tiles/grass";
import Sprite from "../../pxlr/core/sprite";
import {Dimension} from "../../pxlr/utils/types";

export default class LevelManager extends GameEntity {

  camera: Camera;
  grassTile: Sprite;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);

    this.addChild(this.camera);

    this.grassTile = createGrassSprite();
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);
  }

  render(frame: CellGrid): void {
    super.render(frame);

    frame.cellAt(this.camera.mapToScreenCoord({x: 0, y: 0})).setG(1.0);
    frame.cellAt(this.camera.mapToScreenCoord({x: 5, y: 0})).setR(1.0);

    this.grassTile.render(frame, {x: 0, y: 0}, 10);
  }
}
