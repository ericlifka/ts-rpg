import Game from './game/game';
import WebGL from './pxlr/gl/webgl';

let width = 250;
let height = 150;

let game = new Game();
let renderer = new WebGL({ width, height });
let frame = renderer.newRenderFrame();
frame.clear();

frame.cellAt(10, 10).setR(1.0);
renderer.renderFrame();
