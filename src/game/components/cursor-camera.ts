import GameEntity from "../../pxlr/core/game-entity";
import {Camera, Color, Coordinate, Dimension} from "../../pxlr/utils/types";
import CellGrid from "../../pxlr/core/cell-grid";
import Sprite from "../../pxlr/core/sprite";
import PassThroughCamera from "../../pxlr/core/pass-through-camera";

class CursorCamera extends PassThroughCamera implements Camera {

}

export default CursorCamera;
