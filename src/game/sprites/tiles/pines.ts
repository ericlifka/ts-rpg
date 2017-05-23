import Sprite from "../../../pxlr/core/sprite";

const IMPORTED_SPRITE_DATA = {
  "schema": 2,
  "name": "tree",
  "whiteAsEmpty": true,
  "width": 32,
  "height": 32,
  "frames": [[["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#2daa2d", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#2daa2d", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#2daa2d", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#7fc45a", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a"], ["#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e"], ["#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e"], ["#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e"], ["#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22"], ["#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22"], ["#339c22", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#70674d", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#70674d", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#70674d", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#339c22"], ["#339c22", "#339c22", "#339c22", "#13871e", "#918564", "#70674d", "#918564", "#13871e", "#339c22", "#339c22", "#339c22", "#339c22", "#339c22", "#339c22", "#13871e", "#918564", "#70674d", "#918564", "#13871e", "#339c22", "#339c22", "#339c22", "#339c22", "#339c22", "#13871e", "#918564", "#70674d", "#918564", "#13871e", "#339c22", "#339c22", "#339c22"], ["#13871e", "#13871e", "#13871e", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#13871e", "#13871e", "#13871e", "#13871e", "#13871e", "#13871e", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#13871e", "#13871e", "#13871e", "#13871e", "#13871e", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#13871e", "#13871e", "#13871e"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#70674d", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#70674d", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#70674d", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#918564", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#918564", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#918564", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"]]]
};

const pixels: string[][] = IMPORTED_SPRITE_DATA.frames[0];

export const PINES_TILE_SPRITE = Sprite.newFromColorSheet(pixels);
