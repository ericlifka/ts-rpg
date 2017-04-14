import Game from './game/game';
import RunLoop from './pxlr/core/run-loop';
import WebGL from './pxlr/gl/webgl';

const width = 250;
const height = 150;

const game = new Game();
const renderer = new WebGL({ width, height });
const runLoop = new RunLoop();
const frame = renderer.newRenderFrame();

runLoop.setCallback(function (dtime) {
  frame.clear();
  frame.cellAt(10, 10).setR(1.0);
  renderer.renderFrame();
});

runLoop.start();

