import {LevelSpec} from "./level-type";
import {GRASS_EMPTY_TILE_SPRITE} from "../sprites/tiles/grass_empty";
import {PINES_TILE_SPRITE} from "../sprites/tiles/pines";

const g1 = { sprite: GRASS_EMPTY_TILE_SPRITE, borderTile: false };
const w1 = { sprite: PINES_TILE_SPRITE, borderTile: true };

export const forestMeadowLevel: LevelSpec = {
  tiles: [
    [ w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1 ],
    [ w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1 ]
  ],
  cursorStart: {
    x: 4,
    y: 2
  }
};
