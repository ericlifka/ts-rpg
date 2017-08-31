
import {Camera, Color, Coordinate, Dimension} from "../utils/types";
import CellGrid from "./cell-grid";
import Sprite from "./sprite";
import GameEntity from "./game-entity";

export default class PassThroughCamera extends GameEntity implements Camera {
  mapToScreenCoord(coordinate: Coordinate): Coordinate {
    return coordinate;
  }

  isVisible(point: Coordinate, size: Dimension) {
    return true;
  }

  renderEntity(frame: CellGrid<Color>, sprite: Sprite, position: Coordinate, layer: number) {
    sprite.render(frame, position, layer);
  }
}
