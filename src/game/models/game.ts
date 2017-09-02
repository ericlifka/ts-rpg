import {Unit} from "./unit";
import {Movable} from "./movable";

export type Game = {
  player: Unit;
  camera: Movable
};
