import CellGrid from './cell-grid';
import RGBColor from './rgb-color';
import {Color, Coordinate, Dimension} from "../utils/types";

export default class Sprite extends CellGrid<RGBColor> {
  finished: true;

  private constructor(public defaultColor = RGBColor, public offsetAdjustment: Coordinate = {x: 0, y: 0}) {
    super({width: 0, height: 0});

    this.cells = null;
  }

  setPermanentOffset({x = 0, y = 0} = {}) {
    this.offsetAdjustment = {x, y};

    return this;
  }

  applyColor(colorCode) {
    this.iterateCells((color, coord) =>
      color.setFromHex(colorCode));

    return this;
  }

  update(dtime) {
    /*
     sprites ignore updates by default, but accept the event
     so that the api signature of sprites and animations matches
     */
  }

  render(frame: CellGrid<Color>, targetCoord: Coordinate, index = 0) {
    let {x, y} = targetCoord;
    let {x: offset_x, y: offset_y} = this.offsetAdjustment;

    this.iterateCells((color, spriteCoord) => {
      if (color && !color.clear) {
        let {x: _x, y: _y} = spriteCoord;
        let frameColor: Color = frame.cellAt({
          x: x + _x + offset_x,
          y: y + _y + offset_y
        });

        if (index >= frameColor.index) {
          frameColor.copyFromColor(color);
          frameColor.index = index;
        }
      }
    });
  }

  clone() {
    let colorGrid = [];
    for (let x = 0; x < this.dimensions.width; x++) {
      colorGrid[x] = [];
      for (let y = 0; y < this.dimensions.height; y++) {
        colorGrid[x][y] = this.cells[x][y].clone();
      }
    }

    let {x, y} = this.offsetAdjustment;
    let sprite = new Sprite(this.defaultColor, {x, y});
    sprite.cells = colorGrid;
    sprite.dimensions.width = this.dimensions.width;
    sprite.dimensions.height = this.dimensions.height;

    return sprite;
  }

  rotateLeft() {
    let width = this.dimensions.width;
    let height = this.dimensions.height;
    let oldCells = this.cells;
    let newCells = [];
    let x, y;

    for (x = 0; x < height; x++) {
      newCells[x] = [];
    }

    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        newCells[y][width - x - 1] = oldCells[x][y];
      }
    }

    this.dimensions.width = height;
    this.dimensions.height = width;
    this.cells = newCells;

    return this;
  }

  rotateRight() {
    return this
      .rotateLeft()
      .rotateLeft()
      .rotateLeft();
  }

  invertX() {
    for (let x = 0; x < this.dimensions.width / 2; x++) {
      let left = this.cells[x];
      let right = this.cells[this.dimensions.width - x - 1];

      this.cells[x] = right;
      this.cells[this.dimensions.width - x - 1] = left;
    }

    return this;
  }

  invertY() {
    for (let x = 0; x < this.dimensions.width; x++) {
      this.cells[x].reverse();
    }

    return this;
  }

  private _buildEmptySheet(dimensions: Dimension) {
    this.dimensions = dimensions;
    this.cells = [];

    for (let x = 0; x < dimensions.width; x++) {
      this.cells[x] = [];
      for (let y = 0; y < dimensions.height; y++) {
        this.cells[x][y] = new this.defaultColor(0, 0, 0);
      }
    }
  }

  public static newFromColorSheet(pixels: string[][]) {
    let dimensions = {
      width: pixels[0].length,
      height: pixels.length
    } as Dimension;

    let sprite = new Sprite();
    sprite._buildEmptySheet(dimensions);

    for (let h = 0; h < dimensions.height; h++) {
      for (let w = 0; w < dimensions.width; w++) {
        let color = sprite.cellAt({x: w, y: dimensions.height - h - 1}) as RGBColor;
        color.setFromHex(pixels[h][w]);
      }
    }

    return sprite;
  }
}
