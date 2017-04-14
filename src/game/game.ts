import CellGrid from "../pxlr/core/cell-grid";

export default class Game {
  constructor() {

  }

  update(dtime: number, inputs: any[]): void {

  }

  render(frame: CellGrid): void {
    frame.cellAt(10, 10).setR(1.0);
  }
}
