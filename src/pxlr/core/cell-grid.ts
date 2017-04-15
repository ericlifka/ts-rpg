import Color from './color';
import {Coordinate, Dimension} from "../utils/types";
import RGBColor from "./rgb-color";

class FakeCell extends RGBColor {
  constructor(public x: number, public y: number, public index: number) {
    super();
  }
}

export default class CellGrid {
  cells: any[][];

  constructor(public dimensions: Dimension) {
  }

  iterateCells(handler: (Color, Coordinate) => void): void {
    for (let x = 0; x < this.dimensions.width; x++) {
      for (let y = 0; y < this.dimensions.height; y++) {
        let coord: Coordinate = {x, y};
        let color: Color = this.cellAt(coord);

        handler(color, coord);
      }
    }
  }

  cellAt(coord: Coordinate): Color {
    let {x, y} = coord;
    if (x >= 0 && x < this.dimensions.width && y >= 0 && y < this.dimensions.height) {
      return this.cells[x][y];
    }
    else {
      return new FakeCell(x, y, -1);
    }
  }
}
