import Game from './game/game';
import RunLoop from './pxlr/core/run-loop';
import WebGL from './pxlr/gl/webgl';
import KeyboardInput from "./pxlr/controllers/keyboard-input";
import GamepadInput from "./pxlr/controllers/gamepad-input";
import {Dimension} from "./pxlr/utils/types";

const dimensions = {
  width: 250,
  height: 150
} as Dimension;

const game = new Game(dimensions);
const renderer = new WebGL(dimensions);
const runLoop = new RunLoop();
const frame = renderer.newRenderFrame();
const inputs = [
  new KeyboardInput(),
  new GamepadInput()
];

runLoop.setCallback(function (dtime) {
  frame.clear();

  game.update(dtime, inputs.map(input => input.getInputState()));
  game.render(frame);

  renderer.renderFrame();
});

runLoop.start();

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    runLoop.stop();
  }
});

window.addEventListener("blur", function () {
  runLoop.stop();
});

window.addEventListener("focus", function () {
  inputs.forEach(input => input.clearState());
  runLoop.start();
});
