import GameEntity from "../../pxlr/core/game-entity";
import {Camera, Color, Coordinate, Dimension} from "../../pxlr/utils/types";
import CellGrid from "../../pxlr/core/cell-grid";
import Sprite from "../../pxlr/core/sprite";

class CursorCamera extends GameEntity implements Camera {
  mapToScreenCoord(coordinate: Coordinate): Coordinate {
    throw new Error('Method not implemented.');
  }

  isVisible(point: Coordinate, size: Dimension) {
    throw new Error('Method not implemented.');
  }

  renderEntity(frame: CellGrid<Color>, sprite: Sprite, position: Coordinate, layer: number) {
    throw new Error('Method not implemented.');
  }
}

export default CursorCamera;
