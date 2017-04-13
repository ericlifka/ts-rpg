import Color from './rgb-color';

class FakeCell extends Color {
  constructor(public x: number, public y: number, public index: number) {
    super();
  }
}

export default class CellGrid {
  cells: any[][];

  constructor(public width: number, public height: number) {
  }

  iterateCells(handler: Function): void {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        handler(this.cellAt(x, y), x, y);
      }
    }
  }

  cellAt(x: number, y: number) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      return this.cells[x][y];
    }
    else {
      return new FakeCell(x, y, -1);
    }
  }
}
