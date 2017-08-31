
import GameEntity from "../../pxlr/core/game-entity";
import CellGrid from "../../pxlr/core/cell-grid";
import {Camera, Color} from "../../pxlr/utils/types";
import {CHARACTER} from "../../pxlr/utils/layers";

export default class Character extends GameEntity {

  render(frame: CellGrid<Color>, camera: Camera = this.camera): void {
    camera.renderEntity(frame, this.model.sprite, this.model.position, CHARACTER);
  }

}