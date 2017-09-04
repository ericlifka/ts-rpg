import Sprite from "./sprite";
import CellGrid from "./cell-grid";
import {Color, Coordinate} from "../utils/types";

export default class SpriteGroup {
  public activeSprite: string;

  constructor(public animations: {[key: string]: Sprite[]}) {
  }

  loadSprite(spriteKey: string) {
    if (!this.animations[spriteKey]) {
      throw new Error(`No sprite found for key '${spriteKey}'`);
    }

    this.activeSprite = spriteKey;
  }

  update(dtime) {

  }

  render(frame: CellGrid<Color>, targetCoord: Coordinate, index = 0) {
    let animation: Sprite[] = this.animations[this.activeSprite];
    if (animation) {
      let sprite: Sprite = animation[0];
      if (sprite) {
        sprite.render(frame, targetCoord, index);
      }
    }
  }
}
