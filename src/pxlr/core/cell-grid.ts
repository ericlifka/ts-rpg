import {Coordinate, Dimension} from "../utils/types";

export default class CellGrid<T> {
  cells: T[][];

  constructor(public dimensions: Dimension,
              public fakeCell: (x: number, y: number) => T
                = (x, y) => null) {
  }

  iterateCells(handler: (T, Coordinate) => void): void {
    for (let x = 0; x < this.dimensions.width; x++) {
      for (let y = 0; y < this.dimensions.height; y++) {
        let coord: Coordinate = {x, y};
        let cell: T = this.cellAt(coord);

        handler(cell, coord);
      }
    }
  }

  cellAt(coord: Coordinate): T {
    let {x, y} = coord;
    if (x >= 0 && x < this.dimensions.width && y >= 0 && y < this.dimensions.height) {
      return this.cells[x][y];
    }
    else {
      return this.fakeCell(x, y);
    }
  }
}
