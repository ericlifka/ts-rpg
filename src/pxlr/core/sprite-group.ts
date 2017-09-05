import Sprite from "./sprite";
import CellGrid from "./cell-grid";
import {Color, Coordinate} from "../utils/types";

export default class SpriteGroup {

  activeSprite: string;
  activeFrame: number;

  animationActive: boolean = false;
  frameDelay: number = 0;
  timeSinceFrame: number = 0;

  constructor(public animations: {[key: string]: Sprite[]}) {
  }

  loadSprite(spriteKey: string): SpriteGroup {
    let animation = this.animations[spriteKey];
    if (!animation) {
      throw new Error(`No sprite found for key '${spriteKey}'`);
    }

    this.activeSprite = spriteKey;
    this.activeFrame = 0;
    this.timeSinceFrame = 0;
    this.animationActive = animation.length > 1;

    console.log(this.activeSprite, this.activeFrame, this.animationActive, animation);

    return this;
  }

  setFrameDelay(delay: number): SpriteGroup {
    this.frameDelay = delay;

    return this;
  }

  update(dtime) {
    if (this.animationActive) {
      this.timeSinceFrame += dtime;

      if (this.timeSinceFrame > this.frameDelay) {
        this.timeSinceFrame -= this.frameDelay;

        this.activeFrame += 1;

        if (this.activeFrame >= this.animations[this.activeSprite].length) {
          this.activeFrame = 0;
        }
      }
    }
  }

  render(frame: CellGrid<Color>, targetCoord: Coordinate, index = 0) {
    let animation: Sprite[] = this.animations[this.activeSprite];
    if (animation) {
      let sprite: Sprite = animation[this.activeFrame];
      if (sprite) {
        sprite.render(frame, targetCoord, index);
      }
    }
  }
}
