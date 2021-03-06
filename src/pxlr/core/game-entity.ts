import CellGrid from "./cell-grid";
import {Color} from "../utils/types";

export default class GameEntity {
  children: GameEntity[];

  constructor(public parent: GameEntity) {
    this.children = [];
  }

  update(dtime: number, inputSources: any[]): void {
    this.children.forEach(child => {
      child.update(dtime, inputSources);
    });
  }

  render(frame: CellGrid<Color>): void {
    this.children.forEach(child => {
      child.render(frame);
    });
  }

  addChild(child: GameEntity): void {
    if (child) {
      this.children.push(child);
    }
  }

  removeChild(child: GameEntity): void {
    let index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }

  sendEvent(event: string, ...args) {
    if (this[event] && typeof this[event] === "function") {
      return this[event](...args);
    } else {
      console.error(new Error(`Couldn't find ${event} on entity ${this}`));
    }
  }
}
