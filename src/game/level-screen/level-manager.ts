import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import Camera from "./camera";

export default class LevelManager extends GameEntity {
  dimensions: { width: number, height: number };
  camera: Camera;

  constructor(parent, dimensions) {
    super(parent);

    this.dimensions = dimensions;
    this.camera = new Camera(this, dimensions);

    this.addChild(this.camera);
  }

  update(dtime: number, inputs: any[]): void {
    super.update(dtime, inputs);
  }

  render(frame: CellGrid): void {
    super.render(frame);

    frame.cellAt(this.camera.mapToScreenCoord({x: 0, y: 0})).setG(1.0);
    frame.cellAt(this.camera.mapToScreenCoord({x: 5, y: 0})).setR(1.0);
  }
}
