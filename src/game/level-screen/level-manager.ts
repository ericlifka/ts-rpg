import GameEntity from "../../pxlr/core/game-entity";
import Camera from "./camera";
import {Coordinate, Dimension} from "../../pxlr/utils/types";
import LevelTile from "./level-tile";
import Cursor from "./cursor";
import {clamp} from "../../pxlr/utils/clamp";
import {emptyFieldLevel} from "../level-definitions/empty-field";
import {LevelDefinition} from "../level-definitions/level-type";

export default class LevelManager extends GameEntity {

  camera: Camera;
  cursor: Cursor;

  levelGrid: LevelTile[][];
  levelDimensions: Dimension;

  movementClear: number = 0;
  movementDelay: number = 325;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);
    this.cursor = new Cursor(this, this.camera, {x: emptyFieldLevel.cursorStart.x, y: emptyFieldLevel.cursorStart.y});

    this.addChild(this.camera);
    this.addChild(this.cursor);

    this.buildLevelFromDefinition(emptyFieldLevel);

    this.camera.moveTo(this.levelGrid[emptyFieldLevel.cursorStart.x][emptyFieldLevel.cursorStart.y].center);
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

          if (this.isValidCursorTarget(newPosition)) {
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

  private isValidCursorTarget(target: Coordinate): boolean {
    return (
        target.x === this.cursor.gridPosition.x &&
        target.y === this.cursor.gridPosition.y
      ) ||
      !this.levelGrid[target.x][target.y].border_tile;
  }

  private buildLevelFromDefinition(level: LevelDefinition) {
    const height = level.tiles.length;
    const width = level.tiles[0].length;
    this.levelDimensions = { width, height };

    this.levelGrid = [];
    for (let x = 0; x < width; x++) {
      this.levelGrid[x] = [];

      for (let y = 0; y < height; y++) {
        /* note: level definitions and the level grid have rows and columns inverted from each other, hence why the
         * lookups are swapped here. */
        let TileType = level.tiles[y][x];
        let tile = new TileType(this, this.camera, {x, y});
        this.levelGrid[x][y] = tile;
        this.addChild(tile);
      }
    }
  }
}
