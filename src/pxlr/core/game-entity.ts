import CellGrid from "./cell-grid";

export default class GameEntity {
  children: GameEntity[] = [];

  constructor(public parent: GameEntity) {
  }

  update(dtime: number, inputSources: any[]): void {
    this.children.forEach(child => {
      child.update(dtime, inputSources);
    });
  }

  render(frame: CellGrid): void {
    this.children.forEach(child => {
      child.render(frame);
    });
  }
}
