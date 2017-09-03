import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {Camera, Color, InputMap, ORDINALS} from "../../pxlr/utils/types";
import {CHARACTER} from "../../pxlr/utils/layers";

export default class Character extends GameEntity {

  render(frame: CellGrid<Color>, camera: Camera) {
    camera.renderEntity(frame, this.model.sprites[this.model.direction], this.model.position, CHARACTER);
  }

  update(dtime: number, inputSources: InputMap): void {
    const input = inputSources.keyboard;

    if (input.A) {
      if (this.model.direction !== ORDINALS.WEST) {
        this.triggerEvent('turnPlayer', ORDINALS.WEST)
      }
    } else if (input.D) {
      if (this.model.direction !== ORDINALS.EAST) {
        this.triggerEvent('turnPlayer', ORDINALS.EAST)
      }
    } else if (input.W) {
      if (this.model.direction !== ORDINALS.NORTH) {
        this.triggerEvent('turnPlayer', ORDINALS.NORTH)
      }
    } else if (input.S) {
      if (this.model.direction !== ORDINALS.SOUTH) {
        this.triggerEvent('turnPlayer', ORDINALS.SOUTH)
      }
    }
  }

}
