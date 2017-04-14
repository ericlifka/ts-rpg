import CellGrid from "../pxlr/core/cell-grid";
import GameEntity from "../pxlr/core/game-entity";

export default class Game extends GameEntity {
  constructor() {
    super(null);
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);
  }

  render(frame: CellGrid): void {
    super.render(frame);

    frame.cellAt(10, 10).setR(1.0);
  }
}
