import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {Camera, Color, Coordinate, InputMap, ORDINALS} from "../../pxlr/utils/types";
import {CHARACTER} from "../../pxlr/utils/layers";
import {addCoords} from "../../pxlr/utils/vectors";
import {SWORD_GIRL_SPRITE_KEYS} from "../sprites/chatacters/sword-girl";

export default class Character extends GameEntity {

  frameCounter = 0;
  frameDelay = 0;

  moving: boolean = false;

  render(frame: CellGrid<Color>, camera: Camera) {
    camera.renderEntity(frame, this.model.sprites, this.model.position, CHARACTER);


    // camera.renderEntity(
    //   frame,
    //   WALKING_EAST_FRAMES[this.frameCounter],
    //   this.model.position,
    //   CHARACTER);
    //
    // if (this.frameDelay > 100) {
    //   this.frameDelay = 0;
    //   this.frameCounter++;
    //   if (this.frameCounter >= WALKING_EAST_FRAMES.length) {
    //     this.frameCounter = 0;
    //   }
    // }

  }

  bindToModel(model) {
    let res = super.bindToModel(model);

    this.model.sprites.loadSprite('standing-north');

    return res;
  }

  update(dtime: number, inputSources: InputMap): void {
    this.frameDelay += dtime;
    this.model.sprites.update(dtime);

    this.processKeyboardInput(inputSources.keyboard);
    this.processGamepadInput(inputSources.gamepad);
  }

  processGamepadInput(input) {

  }

  processKeyboardInput(input) {
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
