import Sprite from "../../../pxlr/core/sprite";

const pixels: string[][] =
  [[null,null,null,null,"#87CF6D","#87CF6D","#87CF6D","#87CF6D","#87CF6D","#87CF6D",null,null,null,null,null,null],[null,null,"#87CF6D","#87CF6D","#6AA133","#6AA133","#6AA133","#6AA133","#6AA133","#6AA133","#87CF6D","#87CF6D",null,null,null,null],[null,"#87CF6D","#6AA133","#6AA133","#6AA133","#6AA133","#6AA133","#228200","#6AA133","#6AA133","#228200","#87CF6D",null,null,null,null],["#87CF6D","#6AA133","#6AA133","#6AA133","#6AA133","#6AA133","#228200","#9C8A3E","#6AA133","#228200","#B3A16F","#6AA133","#87CF6D",null,null,null],["#4DA847","#6AA133","#6AA133","#6AA133","#6AA133","#228200","#9C8A3E","#B3A16F","#228200","#B3A16F","#6AA133","#6AA133","#6AA133",null,null,null],[null,"#4DA847","#6AA133","#228200","#6AA133","#6AA133","#B3A16F","#B3A16F","#9C8A3E","#6AA133","#6AA133","#6AA133","#4DA847",null,null,null],[null,null,"#4DA847","#B3A16F","#228200","#6AA133","#B3A16F","#9C8A3E","#6AA133","#6AA133","#4DA847","#4DA847",null,null,null,null],[null,null,null,null,"#9C8A3E","#9C8A3E","#9C8A3E","#B3A16F","#4DA847","#4DA847",null,null,null,null,null,null],[null,null,null,null,null,null,"#B3A16F","#CFB753",null,null,null,null,null,null,null,null],[null,null,null,null,null,null,"#B3A16F","#CFB753",null,null,null,null,null,null,null,null],[null,null,null,null,null,null,"#B3A16F","#CFB753",null,null,null,null,null,null,null,null],[null,null,null,null,null,"#CFB753","#B3A16F","#CFB753",null,null,null,null,null,null,null,null],[null,null,null,null,null,"#B3A16F","#B3A16F","#B3A16F","#CFB753",null,null,null,null,null,null,null],[null,null,null,null,"#9C8A3E","#9C8A3E","#B3A16F","#B3A16F","#B3A16F","#CFB753",null,null,null,null,null,null],[null,null,null,"#9C8A3E",null,null,"#9C8A3E","#B3A16F",null,"#B3A16F","#CFB753",null,null,null,null,null],[null,null,null,null,null,null,null,"#9C8A3E",null,null,null,null,null,null,null,null]];

export function createTreeSprite(): Sprite {
  return Sprite.newFromColorSheet(pixels);
}
export const TREE_SPRITE = createTreeSprite();
