import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import Camera from "./camera";
import {createGrassSprite} from "../sprites/tiles/grass";
import Sprite from "../../pxlr/core/sprite";
import {Dimension} from "../../pxlr/utils/types";
import LevelTile from "./level-tile";

export default class LevelManager extends GameEntity {

  camera: Camera;
  levelGrid: LevelTile[][];

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);

    this.addChild(this.camera);

    this.levelGrid = [];
    for (let x = 0; x <= 2; x++) {
      this.levelGrid[x] = [];

      for (let y = 0; y <= 2; y++) {
        let tile = new LevelTile(this, this.camera, createGrassSprite(), {x, y});
        this.addChild(tile);
        this.levelGrid[x][y] = tile;
      }
    }

    this.camera.moveTo(this.levelGrid[1][1].center);
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);
  }

  render(frame: CellGrid): void {
    super.render(frame);

    let center = frame.cellAt(this.camera.centerOffset);
    center.setR(1.0);
    center.setG(0.0);
    center.setB(0.0);
    center.index = 1000;
  }
}
