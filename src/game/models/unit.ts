import Sprite from "../../pxlr/core/sprite";
import {Movable} from "./movable";
import {Ordinal} from "../../pxlr/utils/types";

export type Unit = Movable & {
  sprites: Sprite[];
  direction: Ordinal;
};
