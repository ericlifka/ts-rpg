import GameEntity from "../../pxlr/core/game-entity";
import Camera from "./camera";
import {Coordinate, Dimension} from "../../pxlr/utils/types";
import LevelTile from "./level-tile";
import Cursor from "./cursor";
import {emptyFieldLevel} from "../level-definitions/empty-field";
import {LevelDefinition} from "../level-definitions/level-type";
import CellGrid from "../../pxlr/core/cell-grid";
import Character from "./entities/unit";
import {SWORD_GIRL_CHARACTER_SPRITE} from '../sprites/chatacters/sword-girl';

const KEYBOARD = 0;

export default class LevelManager extends GameEntity {

  camera: Camera;
  cursor: Cursor;

  levelGrid: CellGrid<LevelTile>;
  levelDimensions: Dimension;

  movementClear: number = 0;
  movementDelay: number = 325;
  selectActive: boolean = false;

  sampleCharacter: Character;

  constructor(parent, public dimensions: Dimension) {
    super(parent);

    this.camera = new Camera(this, dimensions);
    this.cursor = new Cursor(this, this.camera, emptyFieldLevel.cursorStart);

    this.addChild(this.camera);
    this.addChild(this.cursor);

    this.buildLevelFromDefinition(emptyFieldLevel);

    let startPosition = this.levelGrid.cellAt(emptyFieldLevel.cursorStart);
    this.camera.moveTo(startPosition.center);

    this.sampleCharacter = new Character(this, this.camera, SWORD_GIRL_CHARACTER_SPRITE);
    this.addChild(this.sampleCharacter);
    this.sampleCharacter.moveToTile(startPosition);
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);

    let input = inputs[KEYBOARD];

    if (!this.selectActive) {
      if (input.ENTER) {
        this.selectActive = true;
        this.selectCursorLocation();
      }
    } else {
      if (!input.ENTER) {
        this.selectActive = false;
      }
    }

    this.movementClear += dtime;
    if (this.movementClear > 0) {

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

      let newTile: LevelTile = this.levelGrid.cellAt({
        x: this.cursor.gridPosition.x + direction.x,
        y: this.cursor.gridPosition.y + direction.y
      });

      if (newTile && newTile !== this.cursor.activeTile && !newTile.border_tile) {
        this.movementClear = -this.movementDelay;
        this.cursor.moveTo(newTile);
        this.camera.animateTo(this.cursor.center, this.movementDelay);
      }

    } else if (!input.W && !input.A && !input.S && !input.D) {
      this.movementClear = 1;
    }
  }

  private buildLevelFromDefinition(level: LevelDefinition) {
    const height = level.tiles.length;
    const width = level.tiles[0].length;
    this.levelDimensions = {width, height};

    this.levelGrid = new CellGrid<LevelTile>(this.levelDimensions);
    this.levelGrid.cells = [];
    for (let x = 0; x < width; x++) {
      this.levelGrid.cells[x] = [];

      for (let y = 0; y < height; y++) {
        /* note: level definitions and the level grid have rows and columns inverted from each other, hence why the
         * lookups are swapped here. */
        let TileType = level.tiles[y][x];
        let tile = new TileType(this, this.camera, {x, y});
        this.levelGrid.cells[x][y] = tile;
        this.addChild(tile);
      }
    }
  }

  selectCursorLocation() {
    let entity = this.cursor.activeTile.containedEntity;
    if (entity) {
      entity.sendEvent('toggleActive');
    }
  }

  showMovementTemplateForUnit(unitEntity: Character) {
    let center = unitEntity.containingTile.gridPosition;
    let distance = unitEntity.model.movement;

    /* do stuff */
    console.log('showing movement template');
    let centerTile = this.levelGrid.cellAt(center);
    centerTile.showHighlightBorders = true;
  }

  clearMovementTemplates() {
    console.log('clearing movement template');
    this.levelGrid.iterateCells((tile: LevelTile) => {
      tile.showHighlightBorders = false;
    });
  }
}
