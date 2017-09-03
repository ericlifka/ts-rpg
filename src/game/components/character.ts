import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {addCoords, Camera, Color, Coordinate, InputMap, ORDINALS} from "../../pxlr/utils/types";
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

    let direction: Coordinate = {x: 0, y: 0};
    if (input.A) {
      direction = addCoords(direction, {x: -1, y: 0});
    }
    if (input.D) {
      direction = addCoords(direction, {x: 1, y: 0});
    }
    if (input.W) {
      direction = addCoords(direction, {x: 0, y: 1});
    }
    if (input.S) {
      direction = addCoords(direction, {x: 0, y: -1});
    }

    if (direction.x !== 0 || direction.y !== 0) {
      this.triggerEvent('movePlayer', addCoords(this.model.position, direction));
    }
  }

}
