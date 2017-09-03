import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {Camera, Color, Coordinate, InputMap, ORDINALS} from "../../pxlr/utils/types";
import {CHARACTER} from "../../pxlr/utils/layers";
import {addCoords} from "../../pxlr/utils/vectors";
import {
  WALKING_EAST_FRAMES, WALKING_NORTH_FRAMES, WALKING_SOUTH_FRAMES,
  WALKING_WEST_FRAMES
} from "../sprites/chatacters/sword-girl";

export default class Character extends GameEntity {

  frameCounter = 0;
  frameDelay = 0;

  render(frame: CellGrid<Color>, camera: Camera) {
    // camera.renderEntity(frame, this.model.sprites[this.model.direction], this.model.position, CHARACTER);


    camera.renderEntity(
      frame,
      WALKING_EAST_FRAMES[this.frameCounter],
      this.model.position,
      CHARACTER);

    if (this.frameDelay > 150) {
      this.frameDelay = 0;
      this.frameCounter++;
      if (this.frameCounter >= WALKING_EAST_FRAMES.length) {
        this.frameCounter = 0;
      }
    }

  }

  update(dtime: number, inputSources: InputMap): void {
    this.frameDelay += dtime;

    this.processKeyboardInput(inputSources.keyboard);
    this.processGamepadInput(inputSources.gamepad);
  }

  processGamepadInput(input) {

  }

  processKeyboardInput(input) {
    if (input.A) {
      if (this.model.direction !== ORDINALS.WEST) {
        this.triggerEvent('turnPlayer', ORDINALS.WEST);
      }
    } else if (input.D) {
      if (this.model.direction !== ORDINALS.EAST) {
        this.triggerEvent('turnPlayer', ORDINALS.EAST);
      }
    } else if (input.W) {
      if (this.model.direction !== ORDINALS.NORTH) {
        this.triggerEvent('turnPlayer', ORDINALS.NORTH);
      }
    } else if (input.S) {
      if (this.model.direction !== ORDINALS.SOUTH) {
        this.triggerEvent('turnPlayer', ORDINALS.SOUTH);
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
