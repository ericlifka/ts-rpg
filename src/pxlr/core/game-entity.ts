import CellGrid from "./cell-grid";
import {Camera, Color, InputMap} from "../utils/types";

export default class GameEntity {
  children: GameEntity[];
  model;
  camera?: Camera;

  constructor(public parent: GameEntity) {
    this.children = [];
  }

  bindToModel(modelRef): any {
    this.model = modelRef;
    modelRef.component = this;

    return this;
  }

  update(dtime: number, inputSources: InputMap): void {
    this.children.forEach(child => {
      child.update(dtime, inputSources);
    });
  }

  render(frame: CellGrid<Color>, camera: Camera = this.camera): void {
    this.children.forEach(child => {
      child.render(frame, camera);
    });
  }

  addChild(child: GameEntity): any {
    if (child) {
      this.children.push(child);
    }

    return child;
  }

  removeChild(child: GameEntity): any {
    let index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }

    return child;
  }

  triggerEvent(event: string, ...args): any {
    let scope: GameEntity = this;
    while (!scope[event] || typeof scope[event] !== "function") {
      scope = scope.parent;
      if (!scope) {
        console.error(new Error(`Couldn't find ${event} on entity parent chain of ${this}.`));
        return;
      }
    }

    return scope[event](...args);
  }
}
