import Sprite from "../../../pxlr/core/sprite";

const IMPORTED_SPRITE_DATA = {
  "schema": 2,
  "name": "plain-grass",
  "whiteAsEmpty": true,
  "width": 32,
  "height": 32,
  "frames": [[["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"]]]
};

const pixels: string[][] = IMPORTED_SPRITE_DATA.frames[0];

export function createSprite(): Sprite {
  return Sprite.newFromColorSheet(pixels);
}
