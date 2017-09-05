import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {Camera, Color, Coordinate, InputMap, ORDINALS} from "../../pxlr/utils/types";
import {CHARACTER} from "../../pxlr/utils/layers";
import {addCoords, normalize} from "../../pxlr/utils/vectors";
import {SWORD_GIRL_SPRITE_KEYS} from "../sprites/chatacters/sword-girl";

export default class Character extends GameEntity {

  moving: boolean = false;
  movementRate: number = 75;

  render(frame: CellGrid<Color>, camera: Camera) {
    camera.renderEntity(
      frame,
      this.model.sprites,
      this.model.position,
      CHARACTER);
  }

  bindToModel(model) {
    let res = super.bindToModel(model);

    this.model.sprites
      .loadSprite('standing-north')
      .setFrameDelay(100);

    return res;
  }

  update(dtime: number, inputSources: InputMap): void {
    this.model.sprites.update(dtime);

    this.processKeyboardInput(inputSources.keyboard, dtime);
    this.processGamepadInput(inputSources.gamepad, dtime);
  }

  processGamepadInput(input, dtime) {

  }

  processKeyboardInput(input, dtime) {
    let facingDirectionChanged = false;
    let movementStateChange = false;

    let facingDirection = this.model.facing;

    if (input.A) {
      facingDirection = ORDINALS.WEST;
    }
    else if (input.D) {
      facingDirection = ORDINALS.EAST;
    }
    else if (input.W) {
      facingDirection = ORDINALS.NORTH;
    }
    else if (input.S) {
      facingDirection = ORDINALS.SOUTH;
    }

    if (facingDirection !== this.model.facing) {
      facingDirectionChanged = true;
      this.triggerEvent('turnPlayer', facingDirection);
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
      if (!this.moving) {
        movementStateChange = true;
        this.moving = true;
      }

      direction = normalize(direction, dtime * this.movementRate / 1000);
      this.triggerEvent('movePlayer', addCoords(this.model.position, direction));
    }
    else if (this.moving) {
      movementStateChange = true;
      this.moving = false;
    }

    if (movementStateChange || facingDirectionChanged) {
      this.updateSpriteGroup();
    }
  }

  updateSpriteGroup() {
    let key = this.moving ?
      SWORD_GIRL_SPRITE_KEYS.WALKING[this.model.facing] :
      SWORD_GIRL_SPRITE_KEYS.STANDING[this.model.facing];

    this.model.sprites.loadSprite(key);
  }

}
