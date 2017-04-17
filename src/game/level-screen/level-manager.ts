import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import Camera from "./camera";
import {Coordinate, Dimension} from "../../pxlr/utils/types";
import LevelTile from "./level-tile";
import Cursor from "./cursor";
import {clamp} from "../../pxlr/utils/clamp";
import GrassTile from "./tiles/grass";
import WoodsTile from "./tiles/woods";

export default class LevelManager extends GameEntity {

  camera: Camera;
  cursor: Cursor;
  levelGrid: LevelTile[][];
  movementClear: number = 0;
  levelDimensions: Dimension;

  movementDelay: number = 325;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);
    this.cursor = new Cursor(this, this.camera, {x: 1, y: 1});

    this.addChild(this.camera);
    this.addChild(this.cursor);

    this.levelDimensions = { width: 10, height: 6 };
    this.levelGrid = [];
    for (let x = 0; x < this.levelDimensions.width; x++) {
      this.levelGrid[x] = [];

      for (let y = 0; y < this.levelDimensions.height; y++) {


        let tile;
        if (x === 0 || y === 0 || x === this.levelDimensions.width - 1 || y === this.levelDimensions.height - 1) {
          tile = new WoodsTile(this, this.camera, {x, y});
        } else {
          tile = new GrassTile(this, this.camera, {x, y});
        }

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
            x: clamp(this.cursor.gridPosition.x + direction.x, 0, this.levelDimensions.width - 1),
            y: clamp(this.cursor.gridPosition.y + direction.y, 0, this.levelDimensions.height - 1)
          };
          if (newPosition.x !== this.cursor.gridPosition.x || newPosition.y !== this.cursor.gridPosition.y) {
            this.movementClear = -this.movementDelay;
            this.cursor.moveTo(newPosition);
            this.camera.animateTo(this.cursor.center, this.movementDelay);
          }
        }
      });
    } else {
      inputs.forEach(input => {
        if (input.INPUT_TYPE === "keyboard") {
          if (!input.W && !input.A && !input.S && !input.D) {
            this.movementClear = 1;
          }
        }
      });
    }
  }

  render(frame: CellGrid): void {
    super.render(frame);
  }
}
