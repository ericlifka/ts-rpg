import Game from './game/game';
import RunLoop from './pxlr/core/run-loop';
import WebGL from './pxlr/gl/webgl';
import KeyboardInput from "./pxlr/controllers/keyboard-input";
import GamepadInput from "./pxlr/controllers/gamepad-input";

const width = 250;
const height = 150;

const game = new Game();
const renderer = new WebGL({ width, height });
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
