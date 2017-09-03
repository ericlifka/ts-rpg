
import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {Camera, Color, ORDINALS} from "../../pxlr/utils/types";
import {CHARACTER} from "../../pxlr/utils/layers";

export default class Character extends GameEntity {

  render(frame: CellGrid<Color>, camera: Camera) {
    camera.renderEntity(frame, this.model.sprites[ORDINALS.NORTH], this.model.position, CHARACTER);
  }

  update(dtime: number, inputSources: any[]): void {
    // this.triggerEvent('movePlayer')
  }

}
