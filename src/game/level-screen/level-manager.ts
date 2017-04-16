import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import Camera from "./camera";
import {createGrassSprite} from "../sprites/tiles/grass";
import {Coordinate, Dimension} from "../../pxlr/utils/types";
import LevelTile from "./level-tile";
import Cursor from "./cursor";
import {clamp} from "../../pxlr/utils/clamp";

export default class LevelManager extends GameEntity {

  camera: Camera;
  cursor: Cursor;
  levelGrid: LevelTile[][];
  movementClear: number = 0;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);
    this.cursor = new Cursor(this, this.camera, {x: 1, y: 1});

    this.addChild(this.camera);
    this.addChild(this.cursor);

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

    this.movementClear += dtime;
    if (this.movementClear > 0) {
      inputs.forEach(input => {
        if (input.INPUT_TYPE === "keyboard") {

          let direction: Coordinate = {x: 0, y: 0};
          if (input.W) {
            direction.y += 1;
          }
          if (input.A) {
            direction.x -= 1;
          }
          if (input.S) {
            direction.y -= 1;
          }
          if (input.D) {
            direction.x += 1;
          }

          let newPosition = {
            x: clamp(this.cursor.gridPosition.x + direction.x, 0, 2),
            y: clamp(this.cursor.gridPosition.y + direction.y, 0, 2)
          };
          if (newPosition.x !== this.cursor.gridPosition.x || newPosition.y !== this.cursor.gridPosition.y) {
            this.movementClear = -500;
            this.cursor.moveTo(newPosition);
          }
        }
      });
    }
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
