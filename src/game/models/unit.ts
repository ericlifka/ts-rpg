import {Movable} from "./movable";
import {Ordinal} from "../../pxlr/utils/types";
import SpriteGroup from "../../pxlr/core/sprite-group";

export type Unit = Movable & {
  sprites: SpriteGroup;
  facing: Ordinal;
};
