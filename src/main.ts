import Game from './game/game';
import RunLoop from './pxlr/core/run-loop';
import WebGL from './pxlr/gl/webgl';
import KeyboardInput from "./pxlr/controllers/keyboard-input";
import GamepadInput from "./pxlr/controllers/gamepad-input";
import {Dimension, InputMap} from "./pxlr/utils/types";
import Frame from './pxlr/gl/gl-frame';

const dimensions: Dimension = {
  width: 250,
  height: 150
};

const game: Game        = new Game(dimensions);
const renderer: WebGL   = new WebGL(dimensions);
const runLoop: RunLoop  = new RunLoop();
const frame: Frame      = renderer.newRenderFrame();
const inputs: InputMap  = {
  keyboard: new KeyboardInput(),
  gamepad: new GamepadInput()
};

runLoop.setCallback(function (dtime) {
  frame.clear();

  game.update(dtime, {
    keyboard: inputs.keyboard.getInputState(),
    gamepad: inputs.gamepad.getInputState()
  });

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
  inputs.keyboard.clearState();
  inputs.gamepad.clearState();

  runLoop.start();
});

window['$game'] = game;
window['$runloop'] = runLoop;
