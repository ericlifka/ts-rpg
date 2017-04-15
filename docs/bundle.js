/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var GameEntity = (function () {
    function GameEntity(parent) {
        this.parent = parent;
        this.children = [];
    }
    GameEntity.prototype.update = function (dtime, inputSources) {
        this.children.forEach(function (child) {
            child.update(dtime, inputSources);
        });
    };
    GameEntity.prototype.render = function (frame) {
        this.children.forEach(function (child) {
            child.render(frame);
        });
    };
    GameEntity.prototype.addChild = function (child) {
        if (child) {
            this.children.push(child);
        }
    };
    GameEntity.prototype.removeChild = function (child) {
        var index = this.children.indexOf(child);
        if (index >= 0) {
            this.children.splice(index, 1);
        }
    };
    return GameEntity;
}());
exports["default"] = GameEntity;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Color = (function () {
    function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    Color.prototype.setR = function (newR) {
        this.r = Math.floor(newR) % 256;
    };
    Color.prototype.getR = function () {
        return this.r;
    };
    Color.prototype.setG = function (newG) {
        this.g = Math.floor(newG) % 256;
    };
    Color.prototype.getG = function () {
        return this.g;
    };
    Color.prototype.setB = function (newB) {
        this.b = Math.floor(newB) % 256;
    };
    Color.prototype.getB = function () {
        return this.b;
    };
    Color.prototype.getColor = function () {
        return "#" + this.r + this.g + this.b;
    };
    return Color;
}());
exports["default"] = Color;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var game_entity_1 = __webpack_require__(0);
var level_manager_1 = __webpack_require__(8);
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(dimensions) {
        var _this = _super.call(this, null) || this;
        _this.dimensions = dimensions;
        _this.levelManager = new level_manager_1["default"](_this, dimensions);
        _this.addChild(_this.levelManager);
        return _this;
    }
    return Game;
}(game_entity_1["default"]));
exports["default"] = Game;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var BUTTON_MAP = {
    0: 'A',
    1: 'B',
    2: 'X',
    3: 'Y',
    4: 'left-bumper',
    5: 'right-bumper',
    6: 'left-trigger',
    7: 'right-trigger',
    8: 'back',
    9: 'start',
    10: 'left-stick-press',
    11: 'right-stick-press',
    12: 'd-pad-up',
    13: 'd-pad-down',
    14: 'd-pad-left',
    15: 'd-pad-right'
};
function gamepadDescriptor() {
    var descriptor = {
        INPUT_TYPE: 'gamepad'
    };
    Object.keys(BUTTON_MAP).forEach(function (key) {
        descriptor[BUTTON_MAP[key]] = false;
    });
    descriptor['left-stick-x'] = 0;
    descriptor['left-stick-y'] = 0;
    descriptor['right-stick-x'] = 0;
    descriptor['right-stick-y'] = 0;
    return descriptor;
}
function normalize(axisTilt) {
    return Math.round(axisTilt * 10) / 10;
}
var GamepadInput = (function () {
    function GamepadInput() {
        window.addEventListener("gamepadconnected", function (e) {
            console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.", e['gamepad'].index, e['gamepad'].id, e['gamepad'].buttons.length, e['gamepad'].axes.length);
        });
        window.addEventListener("gamepaddisconnected", function (e) {
            console.log("Gamepad disconnected from index %d: %s", e['gamepad'].index, e['gamepad'].id);
        });
    }
    GamepadInput.prototype.getInputState = function () {
        var gamepad = navigator.getGamepads()[0];
        var gamepadState = gamepadDescriptor();
        if (gamepad && gamepad.connected) {
            gamepad.buttons.forEach(function (button, index) {
                gamepadState[BUTTON_MAP[index]] = button.pressed;
            });
            gamepadState['left-stick-x'] = normalize(gamepad.axes[0]);
            gamepadState['left-stick-y'] = normalize(gamepad.axes[1]);
            gamepadState['right-stick-x'] = normalize(gamepad.axes[2]);
            gamepadState['right-stick-y'] = normalize(gamepad.axes[3]);
        }
        return gamepadState;
    };
    GamepadInput.prototype.clearState = function () {
        /* no op for gamepads */
    };
    return GamepadInput;
}());
exports["default"] = GamepadInput;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function cloneObj(obj) {
    var nObj = {};
    Object.keys(obj).forEach(function (key) {
        nObj[key] = obj[key];
    });
    return nObj;
}
function newInputDescriptor() {
    return {
        W: false, A: false, S: false, D: false,
        SPACE: false, ENTER: false
    };
}
var KEYS = {
    87: 'W', 65: 'A', 83: 'S', 68: 'D',
    32: 'SPACE', 13: 'ENTER'
};
var KeyboardInput = (function () {
    function KeyboardInput() {
        var _this = this;
        this.clearState();
        document.body.addEventListener('keydown', function (event) { return _this.keydown(event); });
        document.body.addEventListener('keyup', function (event) { return _this.keyup(event); });
    }
    KeyboardInput.prototype.getInputState = function () {
        var state = cloneObj(this.inputState);
        this.propagateInputClears();
        return state;
    };
    KeyboardInput.prototype.clearState = function () {
        this.clearAfterNext = newInputDescriptor();
        this.inputState = newInputDescriptor();
        this.inputState.INPUT_TYPE = "keyboard";
    };
    KeyboardInput.prototype.propagateInputClears = function () {
        var _this = this;
        Object.keys(this.clearAfterNext).forEach(function (key) {
            if (_this.clearAfterNext[key]) {
                _this.inputState[key] = false;
                _this.clearAfterNext[key] = false;
            }
        });
    };
    KeyboardInput.prototype.keydown = function (event) {
        this.inputState[KEYS[event.keyCode]] = true;
        this.clearAfterNext[KEYS[event.keyCode]] = false;
    };
    KeyboardInput.prototype.keyup = function (event) {
        this.clearAfterNext[KEYS[event.keyCode]] = true;
    };
    return KeyboardInput;
}());
exports["default"] = KeyboardInput;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var fpsCounterDOM = null;
function updateFPScounter(dtime) {
    if (!fpsCounterDOM) {
        fpsCounterDOM = document.createElement('div');
        fpsCounterDOM.classList.add('fps-counter');
        fpsCounterDOM.oldfps = 0;
        document.body.appendChild(fpsCounterDOM);
    }
    var fps = Math.floor(1000 / dtime * 10) / 10;
    fpsCounterDOM.oldfps = fps;
    var fpsStr = "" + fps;
    if (fpsStr.length <= 2) {
        fpsStr = fpsStr + ".0";
    }
    fpsCounterDOM.innerHTML = fpsStr;
}
function now() {
    return (new Date()).valueOf();
}
var FpsTracker = (function () {
    function FpsTracker() {
        this.frameTimes = [];
        this.totalTime = 20 * 100;
        for (var i = 0; i < 100; i++) {
            this.frameTimes.push(20);
        }
    }
    FpsTracker.prototype.push = function (ftime) {
        var overflow = this.frameTimes.shift();
        this.totalTime += ftime - overflow;
        this.frameTimes.push(ftime);
    };
    FpsTracker.prototype.average = function () {
        return this.totalTime / 100;
    };
    return FpsTracker;
}());
var RunLoop = (function () {
    function RunLoop(callback) {
        if (callback === void 0) { callback = (function () { return null; }); }
        this.callback = callback;
        this.fpsTracker = new FpsTracker();
        this.active = false;
        this.lastFrameTime = now();
        this.frameCount = 0;
        this.boundFrameHandler = this.frameHandler.bind(this);
    }
    RunLoop.prototype.frameHandler = function (time) {
        if (!this.active)
            return;
        var currentTime = now();
        var dtime = currentTime - this.lastFrameTime;
        this.lastFrameTime = currentTime;
        this.updateFPScounter(dtime);
        try {
            this.callback(dtime);
        }
        catch (e) {
            console.error('Error running frame: ', e);
        }
        window.requestAnimationFrame(this.boundFrameHandler);
    };
    RunLoop.prototype.start = function () {
        if (!this.active) {
            this.active = true;
            window.requestAnimationFrame(this.boundFrameHandler);
        }
    };
    RunLoop.prototype.stop = function () {
        this.active = false;
    };
    RunLoop.prototype.setCallback = function (callback) {
        this.callback = callback;
    };
    RunLoop.prototype.updateFPScounter = function (dtime) {
        this.fpsTracker.push(dtime);
        if (this.frameCount++ > 60) {
            updateFPScounter(this.fpsTracker.average());
            this.frameCount = 0;
        }
    };
    return RunLoop;
}());
exports["default"] = RunLoop;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gl_frame_1 = __webpack_require__(13);
var WebGL = (function () {
    function WebGL(options) {
        if (options === void 0) { options = {}; }
        this.width = 200;
        this.height = 150;
        this.pixelSize = 1;
        this.canvasSetup(options);
        this.createGl();
        this.initShaders();
        this.setCameraPerspective();
        this.frame = new gl_frame_1["default"](this.width, this.height, this.gl);
    }
    WebGL.prototype.newRenderFrame = function () {
        return this.frame;
    };
    WebGL.prototype.renderFrame = function () {
        this.frame.flushToBuffers();
        this.drawScene();
    };
    WebGL.prototype.setFillColor = function (fillColor) {
        this.frame.setFillColor(fillColor);
    };
    WebGL.prototype.canvasSetup = function (options) {
        this.container = options.container || document.body;
        this.width = options.width || this.width;
        this.height = options.height || this.height;
        this.calculateMaximumPixelSize();
        this.createCanvasElement();
    };
    WebGL.prototype.createCanvasElement = function () {
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.fullWidth;
        this.canvas.height = this.fullHeight;
        this.canvas.classList.add('pxlr-canvas');
        this.container.appendChild(this.canvas);
    };
    WebGL.prototype.calculateMaximumPixelSize = function () {
        var maxWidth = window.innerWidth;
        var maxHeight = window.innerHeight;
        var width = this.width;
        var height = this.height;
        var pixelSize = 1;
        while (true) {
            if (width * pixelSize > maxWidth || height * pixelSize > maxHeight) {
                pixelSize--;
                break;
            }
            pixelSize++;
        }
        if (pixelSize <= 0) {
            pixelSize = 1;
        }
        this.pixelSize = pixelSize;
        this.fullWidth = width * pixelSize;
        this.fullHeight = height * pixelSize;
    };
    WebGL.prototype.createGl = function () {
        var gl = this.canvas.getContext("webgl");
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        this.gl = gl;
    };
    WebGL.prototype.initShaders = function () {
        var gl = this.gl;
        var fragmentShader = this.getShader("shader-fs");
        var vertexShader = this.getShader("shader-vs");
        var shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.error("Unable to initialize the shader program.");
        }
        gl.useProgram(shaderProgram);
        var vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
        gl.enableVertexAttribArray(vertexPositionAttribute);
        var vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
        gl.enableVertexAttribArray(vertexColorAttribute);
        this.shaderProgram = shaderProgram;
        this.vertexPositionAttribute = vertexPositionAttribute;
        this.vertexColorAttribute = vertexColorAttribute;
    };
    WebGL.prototype.getShader = function (id) {
        var gl = this.gl;
        var shaderScript = document.getElementById(id);
        if (!shaderScript) {
            console.error('Invallid shader id: ' + id);
            return null;
        }
        var theSource = "";
        var currentChild = shaderScript.firstChild;
        while (currentChild) {
            if (currentChild.nodeType == 3) {
                theSource += currentChild.textContent;
            }
            currentChild = currentChild.nextSibling;
        }
        var shader;
        if (shaderScript.getAttribute('type') === "x-shader/x-fragment") {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        }
        else if (shaderScript.getAttribute('type') === "x-shader/x-vertex") {
            shader = gl.createShader(gl.VERTEX_SHADER);
        }
        gl.shaderSource(shader, theSource);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
            return null;
        }
        return shader;
    };
    WebGL.prototype.setCameraPerspective = function () {
        this.makePerspectiveMatrix();
        this.makeMovementMatrix();
        this.setMatrixUniforms();
    };
    WebGL.prototype.makeMovementMatrix = function () {
        var x = -this.width / 2;
        var y = -this.height / 2;
        var z = -1 * (Math.sin(3 / 8 * Math.PI) * this.height / 2) / (Math.sin(1 / 8 * Math.PI));
        this.movementMatrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ];
    };
    WebGL.prototype.makePerspectiveMatrix = function () {
        var fieldOfView = 45;
        var aspectRatio = this.width / this.height;
        var zmin = 0.1;
        var zmax = 1000.0;
        var ymax = zmin * Math.tan(fieldOfView * Math.PI / 360.0);
        var ymin = -ymax;
        var xmax = ymax * aspectRatio;
        var xmin = ymin * aspectRatio;
        this.perspectiveMatrix = this.makeFrustumMatrix(xmin, xmax, ymin, ymax, zmin, zmax);
    };
    WebGL.prototype.makeFrustumMatrix = function (left, right, bottom, top, znear, zfar) {
        var X = 2 * znear / (right - left);
        var Y = 2 * znear / (top - bottom);
        var A = (right + left) / (right - left);
        var B = (top + bottom) / (top - bottom);
        var C = -(zfar + znear) / (zfar - znear);
        var D = -2 * zfar * znear / (zfar - znear);
        return [
            X, 0, 0, 0,
            0, Y, 0, 0,
            A, B, C, -1,
            0, 0, D, 0
        ];
    };
    WebGL.prototype.drawScene = function () {
        var _this = this;
        var gl = this.gl;
        // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        this.frame.chunks.forEach(function (chunk) {
            gl.bindBuffer(gl.ARRAY_BUFFER, chunk.verticesBuffer);
            gl.vertexAttribPointer(_this.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, chunk.verticesColorBuffer);
            gl.vertexAttribPointer(_this.vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, chunk.verticesIndexBuffer);
            gl.drawElements(gl.TRIANGLES, chunk.vertexCount, gl.UNSIGNED_SHORT, 0);
        });
    };
    WebGL.prototype.setMatrixUniforms = function () {
        var gl = this.gl;
        var pUniform = gl.getUniformLocation(this.shaderProgram, "uPMatrix");
        gl.uniformMatrix4fv(pUniform, false, new Float32Array(this.perspectiveMatrix));
        var mvUniform = gl.getUniformLocation(this.shaderProgram, "uMVMatrix");
        gl.uniformMatrix4fv(mvUniform, false, new Float32Array(this.movementMatrix));
    };
    return WebGL;
}());
exports["default"] = WebGL;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var game_entity_1 = __webpack_require__(0);
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(parent, dimensions) {
        var _this = _super.call(this, parent) || this;
        _this.dimensions = dimensions;
        _this.position = { x: 0, y: 0 };
        _this.centerOffset = {
            x: Math.floor(dimensions.width / 2),
            y: Math.floor(dimensions.height / 2)
        };
        return _this;
    }
    Camera.prototype.mapToScreenCoord = function (coord) {
        return {
            x: this.centerOffset.x + coord.x - this.position.x,
            y: this.centerOffset.y + coord.y - this.position.y
        };
    };
    return Camera;
}(game_entity_1["default"]));
exports["default"] = Camera;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var game_entity_1 = __webpack_require__(0);
var camera_1 = __webpack_require__(7);
var LevelManager = (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager(parent, dimensions) {
        var _this = _super.call(this, parent) || this;
        _this.dimensions = dimensions;
        _this.camera = new camera_1["default"](_this, dimensions);
        _this.addChild(_this.camera);
        return _this;
    }
    LevelManager.prototype.update = function (dtime, inputs) {
        _super.prototype.update.call(this, dtime, inputs);
    };
    LevelManager.prototype.render = function (frame) {
        _super.prototype.render.call(this, frame);
        frame.cellAt(this.camera.mapToScreenCoord({ x: 0, y: 0 })).setG(1.0);
        frame.cellAt(this.camera.mapToScreenCoord({ x: 5, y: 0 })).setR(1.0);
    };
    return LevelManager;
}(game_entity_1["default"]));
exports["default"] = LevelManager;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var game_1 = __webpack_require__(2);
var run_loop_1 = __webpack_require__(5);
var webgl_1 = __webpack_require__(6);
var keyboard_input_1 = __webpack_require__(4);
var gamepad_input_1 = __webpack_require__(3);
var dimensions = {
    width: 250,
    height: 150
};
var game = new game_1["default"](dimensions);
var renderer = new webgl_1["default"](dimensions);
var runLoop = new run_loop_1["default"]();
var frame = renderer.newRenderFrame();
var inputs = [
    new keyboard_input_1["default"](),
    new gamepad_input_1["default"]()
];
runLoop.setCallback(function (dtime) {
    frame.clear();
    game.update(dtime, inputs.map(function (input) { return input.getInputState(); }));
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
    inputs.forEach(function (input) { return input.clearState(); });
    runLoop.start();
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var rgb_color_1 = __webpack_require__(11);
var FakeCell = (function (_super) {
    __extends(FakeCell, _super);
    function FakeCell(x, y, index) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.index = index;
        return _this;
    }
    return FakeCell;
}(rgb_color_1["default"]));
var CellGrid = (function () {
    function CellGrid(width, height) {
        this.width = width;
        this.height = height;
    }
    CellGrid.prototype.iterateCells = function (handler) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                handler(this.cellAt({ x: x, y: y }), x, y);
            }
        }
    };
    CellGrid.prototype.cellAt = function (coord) {
        var x = coord.x, y = coord.y;
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            return this.cells[x][y];
        }
        else {
            return new FakeCell(x, y, -1);
        }
    };
    return CellGrid;
}());
exports["default"] = CellGrid;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var color_1 = __webpack_require__(1);
var RGBColor = (function (_super) {
    __extends(RGBColor, _super);
    function RGBColor(r, g, b) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        var _this = _super.call(this, r, g, b) || this;
        _this.clear = false;
        return _this;
    }
    RGBColor.prototype.setFromHex = function (hex) {
        if (!hex) {
            this.clear = true;
            return;
        }
        if (hex.length === 7 || hex.length === 4) {
            hex = hex.slice(1);
        }
        if (hex.length === 3) {
            hex = hex
                .split('')
                .map(function (char) { return char + char; })
                .join('');
        }
        if (hex.length !== 6) {
            throw new Error("Invalid hex string: " + hex);
        }
        this.setR(parseInt(hex.slice(0, 2), 16));
        this.setG(parseInt(hex.slice(2, 4), 16));
        this.setB(parseInt(hex.slice(4, 6), 16));
    };
    RGBColor.prototype.copyFromColor = function (color) {
        this.setR(color.getR());
        this.setG(color.getG());
        this.setB(color.getB());
    };
    RGBColor.prototype.clone = function () {
        return new RGBColor(this.getR(), this.getG(), this.getB());
    };
    RGBColor.fromHex = function (hex) {
        var color = new RGBColor();
        color.setFromHex(hex);
        return color;
    };
    return RGBColor;
}(color_1["default"]));
exports["default"] = RGBColor;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var color_1 = __webpack_require__(1);
var BufferColor = (function (_super) {
    __extends(BufferColor, _super);
    function BufferColor(vertexGroup, colorBufferOffset) {
        var _this = _super.call(this, 0, 0, 0) || this;
        _this.vertexGroup = vertexGroup;
        _this.colorBufferOffset = colorBufferOffset;
        _this.opacity = 1.0;
        _this.index = -1;
        return _this;
    }
    BufferColor.prototype.setR = function (newR) {
        this.r = newR;
        this.updateColorBuffers(newR, 0);
    };
    BufferColor.prototype.setG = function (newG) {
        this.g = newG;
        this.updateColorBuffers(newG, 1);
    };
    BufferColor.prototype.setB = function (newB) {
        this.b = newB;
        this.updateColorBuffers(newB, 2);
    };
    BufferColor.prototype.updateColorBuffers = function (colorValue, offset) {
        for (var index = offset; index <= 14; index += 4) {
            this.vertexGroup.generatedColors[this.colorBufferOffset + index] = colorValue;
        }
    };
    BufferColor.prototype.copyFromColor = function (color) {
        var r = color.getR();
        var g = color.getG();
        var b = color.getB();
        this.setR(r / 255.0);
        this.setG(g / 255.0);
        this.setB(b / 255.0);
    };
    return BufferColor;
}(color_1["default"]));
exports["default"] = BufferColor;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var cell_grid_1 = __webpack_require__(10);
var buffer_color_1 = __webpack_require__(12);
function pushOntoEnd(target, data) {
    for (var i = 0; i < data.length; i++) {
        target.push(data[i]);
    }
}
function emptyChunk() {
    return {
        vertices: [],
        generatedColors: [],
        cubeVertexIndices: [],
        squareIndex: 0,
        vertexCount: 0,
        verticesBuffer: null,
        verticesColorBuffer: null,
        verticesIndexBuffer: null
    };
}
var GlFrame = (function (_super) {
    __extends(GlFrame, _super);
    function GlFrame(width, height, gl) {
        var _this = _super.call(this, width, height) || this;
        _this.fillColor = {
            r: 0,
            g: 0,
            b: 0
        };
        _this.gl = gl;
        _this.createBuffers();
        return _this;
    }
    GlFrame.prototype.createBuffers = function () {
        var gl = this.gl;
        var chunk = emptyChunk();
        var chunks = [chunk];
        var height = this.height;
        var width = this.width;
        var colorGrid = [];
        for (var w = 0; w < width; w++) {
            var currentColorColumn = [];
            for (var h = 0; h < height; h++) {
                if (chunk.squareIndex >= 5000) {
                    chunk = emptyChunk();
                    chunks.push(chunk);
                }
                currentColorColumn.push(new buffer_color_1["default"](chunk, chunk.generatedColors.length));
                pushOntoEnd(chunk.vertices, [
                    w, h, 0,
                    w + 1, h, 0,
                    w + 1, h + 1, 0,
                    w, h + 1, 0
                ]);
                var color = [0.0, 0.0, 0.0, 1.0];
                for (var i = 0; i < 4; i++) {
                    pushOntoEnd(chunk.generatedColors, color);
                }
                pushOntoEnd(chunk.cubeVertexIndices, [
                    chunk.squareIndex, chunk.squareIndex + 1, chunk.squareIndex + 2,
                    chunk.squareIndex, chunk.squareIndex + 2, chunk.squareIndex + 3 // second
                ]);
                chunk.squareIndex += 4; // four vertices have been created
                chunk.vertexCount += 6; // but they're mapped to six render-able vertex indices
            }
            colorGrid.push(currentColorColumn);
        }
        chunks.forEach(function (chunk) {
            chunk.verticesBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, chunk.verticesBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(chunk.vertices), gl.STATIC_DRAW);
            chunk.verticesColorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, chunk.verticesColorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(chunk.generatedColors), gl.STATIC_DRAW);
            chunk.verticesIndexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, chunk.verticesIndexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(chunk.cubeVertexIndices), gl.STATIC_DRAW);
        });
        this.chunks = chunks;
        this.cells = colorGrid;
    };
    GlFrame.prototype.flushToBuffers = function () {
        var gl = this.gl;
        this.chunks.forEach(function (chunk) {
            gl.bindBuffer(gl.ARRAY_BUFFER, chunk.verticesColorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(chunk.generatedColors), gl.STATIC_DRAW);
        });
    };
    GlFrame.prototype.setFillColor = function (color) {
        this.fillColor = {
            r: color.getR() / 255.0,
            g: color.getG() / 255.0,
            b: color.getB() / 255.0
        };
    };
    GlFrame.prototype.clear = function () {
        var _a = this.fillColor, r = _a.r, g = _a.g, b = _a.b;
        this.iterateCells(function (color) {
            color.setR(r);
            color.setG(g);
            color.setB(b);
            color.index = -1;
        });
    };
    return GlFrame;
}(cell_grid_1["default"]));
exports["default"] = GlFrame;


/***/ })
/******/ ]);