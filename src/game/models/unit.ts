import Sprite from "../../pxlr/core/sprite";
import {Movable} from "./movable";

export type Unit = Movable & {
  sprite: Sprite;
};
