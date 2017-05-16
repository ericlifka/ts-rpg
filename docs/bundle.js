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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
var cell_grid_1 = __webpack_require__(2);
var rgb_color_1 = __webpack_require__(26);
var types_1 = __webpack_require__(5);
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(defaultColor, offsetAdjustment) {
        if (defaultColor === void 0) { defaultColor = rgb_color_1["default"]; }
        if (offsetAdjustment === void 0) { offsetAdjustment = { x: 0, y: 0 }; }
        var _this = _super.call(this, { width: 0, height: 0 }) || this;
        _this.defaultColor = defaultColor;
        _this.offsetAdjustment = offsetAdjustment;
        _this.cells = null;
        return _this;
    }
    Sprite.prototype.setPermanentOffset = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? 0 : _c, _d = _b.y, y = _d === void 0 ? 0 : _d;
        this.offsetAdjustment = { x: x, y: y };
        return this;
    };
    Sprite.prototype.applyColor = function (colorCode) {
        this.iterateCells(function (color, coord) {
            return color.setFromHex(colorCode);
        });
        return this;
    };
    Sprite.prototype.update = function (dtime) {
        /*
         sprites ignore updates by default, but accept the event
         so that the api signature of sprites and animations matches
         */
    };
    Sprite.prototype.render = function (frame, targetCoord, index) {
        if (index === void 0) { index = 0; }
        var x = targetCoord.x, y = targetCoord.y;
        var _a = this.offsetAdjustment, offset_x = _a.x, offset_y = _a.y;
        this.iterateCells(function (color, spriteCoord) {
            if (color && !color.clear) {
                var _x = spriteCoord.x, _y = spriteCoord.y;
                var frameColor = frame.cellAt({
                    x: x + _x + offset_x,
                    y: y + _y + offset_y
                });
                if (index >= frameColor.index) {
                    frameColor.copyFromColor(color);
                    frameColor.index = index;
                }
            }
        });
    };
    Sprite.prototype.clone = function () {
        var colorGrid = [];
        for (var x_1 = 0; x_1 < this.dimensions.width; x_1++) {
            colorGrid[x_1] = [];
            for (var y_1 = 0; y_1 < this.dimensions.height; y_1++) {
                colorGrid[x_1][y_1] = this.cells[x_1][y_1].clone();
            }
        }
        var _a = this.offsetAdjustment, x = _a.x, y = _a.y;
        var sprite = new Sprite(this.defaultColor, { x: x, y: y });
        sprite.cells = colorGrid;
        sprite.dimensions = types_1.copyDimension(this.dimensions);
        return sprite;
    };
    Sprite.prototype.rotateLeft = function () {
        var width = this.dimensions.width;
        var height = this.dimensions.height;
        var oldCells = this.cells;
        var newCells = [];
        var x, y;
        for (x = 0; x < height; x++) {
            newCells[x] = [];
        }
        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                newCells[y][width - x - 1] = oldCells[x][y];
            }
        }
        this.dimensions = {
            width: height,
            height: width
        };
        this.cells = newCells;
        return this;
    };
    Sprite.prototype.rotateRight = function () {
        return this
            .rotateLeft()
            .rotateLeft()
            .rotateLeft();
    };
    Sprite.prototype.invertX = function () {
        for (var x = 0; x < this.dimensions.width / 2; x++) {
            var left = this.cells[x];
            var right = this.cells[this.dimensions.width - x - 1];
            this.cells[x] = right;
            this.cells[this.dimensions.width - x - 1] = left;
        }
        return this;
    };
    Sprite.prototype.invertY = function () {
        for (var x = 0; x < this.dimensions.width; x++) {
            this.cells[x].reverse();
        }
        return this;
    };
    Sprite.prototype._buildEmptySheet = function (dimensions) {
        this.dimensions = dimensions;
        this.cells = [];
        for (var x = 0; x < dimensions.width; x++) {
            this.cells[x] = [];
            for (var y = 0; y < dimensions.height; y++) {
                this.cells[x][y] = new this.defaultColor(0, 0, 0);
            }
        }
    };
    Sprite.newFromColorSheet = function (pixels) {
        var dimensions = {
            width: pixels[0].length,
            height: pixels.length
        };
        var sprite = new Sprite();
        sprite._buildEmptySheet(dimensions);
        for (var h = 0; h < dimensions.height; h++) {
            for (var w = 0; w < dimensions.width; w++) {
                var color = sprite.cellAt({ x: w, y: dimensions.height - h - 1 });
                color.setFromHex(pixels[h][w]);
            }
        }
        return sprite;
    };
    return Sprite;
}(cell_grid_1["default"]));
exports["default"] = Sprite;


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var CellGrid = (function () {
    function CellGrid(dimensions, fakeCell) {
        if (fakeCell === void 0) { fakeCell = function (x, y) { return null; }; }
        this.dimensions = dimensions;
        this.fakeCell = fakeCell;
    }
    CellGrid.prototype.iterateCells = function (handler) {
        for (var x = 0; x < this.dimensions.width; x++) {
            for (var y = 0; y < this.dimensions.height; y++) {
                var coord = { x: x, y: y };
                var cell = this.cellAt(coord);
                handler(cell, coord);
            }
        }
    };
    CellGrid.prototype.cellAt = function (coord) {
        var x = coord.x, y = coord.y;
        if (x >= 0 && x < this.dimensions.width && y >= 0 && y < this.dimensions.height) {
            return this.cells[x][y];
        }
        else {
            return this.fakeCell(x, y);
        }
    };
    return CellGrid;
}());
exports["default"] = CellGrid;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.BACKGROUND = 1;
exports.DECORATION = 2;
exports.CHARACTER = 3;
exports.OVERLAY = 4;
exports.INTERFACE = 5;


/***/ }),
/* 4 */
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
var game_entity_1 = __webpack_require__(1);
var layers_1 = __webpack_require__(3);
var LevelTile = (function (_super) {
    __extends(LevelTile, _super);
    function LevelTile(parent, camera, sprite, gridPosition) {
        var _this = _super.call(this, parent) || this;
        _this.camera = camera;
        _this.sprite = sprite;
        _this.gridPosition = gridPosition;
        _this.border_tile = false;
        _this.tileSize = sprite.dimensions.width;
        _this.center = {
            x: _this.gridPosition.x * _this.tileSize,
            y: _this.gridPosition.y * _this.tileSize
        };
        _this.position = {
            x: _this.center.x - Math.floor(_this.sprite.dimensions.width / 2),
            y: _this.center.y - Math.floor(_this.sprite.dimensions.height / 2)
        };
        return _this;
    }
    LevelTile.prototype.render = function (frame) {
        var screenCoord = this.camera.mapToScreenCoord(this.position);
        this.sprite.render(frame, screenCoord, layers_1.BACKGROUND);
    };
    return LevelTile;
}(game_entity_1["default"]));
exports["default"] = LevelTile;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function copyCoord(target) {
    return { x: target.x, y: target.y };
}
exports.copyCoord = copyCoord;
function copyDimension(target) {
    return { width: target.width, height: target.height };
}
exports.copyDimension = copyDimension;


/***/ }),
/* 6 */
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
var game_entity_1 = __webpack_require__(1);
var level_manager_1 = __webpack_require__(15);
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(dimensions) {
        var _this = _super.call(this, null) || this;
        _this.dimensions = dimensions;
        _this.levelManager = new level_manager_1["default"](_this, _this.dimensions);
        _this.addChild(_this.levelManager);
        return _this;
    }
    return Game;
}(game_entity_1["default"]));
exports["default"] = Game;


/***/ }),
/* 7 */
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
        var gamepadState = gamepadDescriptor();
        if (!navigator || !navigator.getGamepads || typeof navigator.getGamepads !== "function") {
            return gamepadState;
        }
        var gamepad = navigator.getGamepads()[0];
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
/* 8 */
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
/* 9 */
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
        this.lastFrameTime = Date.now();
        this.frameCount = 0;
        this.boundFrameHandler = this.frameHandler.bind(this);
    }
    RunLoop.prototype.frameHandler = function (time) {
        if (!this.active)
            return;
        var currentTime = Date.now();
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gl_frame_1 = __webpack_require__(28);
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
        this.frame = new gl_frame_1["default"]({ width: this.width, height: this.height }, this.gl);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var grass_1 = __webpack_require__(16);
var woods_1 = __webpack_require__(17);
var g1 = grass_1["default"];
var w1 = woods_1["default"];
exports.emptyFieldLevel = {
    tiles: [
        [w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1],
        [w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1],
        [w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1],
        [w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1],
        [w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1],
        [w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1],
        [w1, w1, w1, w1, g1, g1, g1, g1, g1, g1, g1, g1, w1, w1, w1, w1],
        [w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1],
        [w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1, w1]
    ],
    cursorStart: {
        x: 4,
        y: 2
    }
};


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
var game_entity_1 = __webpack_require__(1);
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera(parent, dimensions) {
        var _this = _super.call(this, parent) || this;
        _this.dimensions = dimensions;
        _this.animationActive = false;
        _this.animationCounter = 0;
        _this.animationEnd = 0;
        _this.position = { x: 0, y: 0 };
        _this.centerOffset = {
            x: Math.floor(dimensions.width / 2),
            y: Math.floor(dimensions.height / 2)
        };
        return _this;
    }
    Camera.prototype.update = function (dtime, inputs) {
        _super.prototype.update.call(this, dtime, inputs);
        if (this.animationActive) {
            this.animationCounter += dtime;
            if (this.animationCounter > this.animationEnd) {
                this.animationActive = false;
                this.position.x = this.animationEndPosition.x;
                this.position.y = this.animationEndPosition.y;
            }
            else {
                var ratio = this.animationCounter / this.animationEnd;
                this.position.x = Math.floor(this.animationStartPosition.x + ratio * this.animationDelta.x);
                this.position.y = Math.floor(this.animationStartPosition.y + ratio * this.animationDelta.y);
            }
        }
    };
    Camera.prototype.mapToScreenCoord = function (coord) {
        return {
            x: this.centerOffset.x + coord.x - this.position.x,
            y: this.centerOffset.y + coord.y - this.position.y
        };
    };
    Camera.prototype.animateTo = function (coord, time) {
        this.animationActive = true;
        this.animationCounter = 0;
        this.animationEnd = time;
        this.animationStartPosition = { x: this.position.x, y: this.position.y };
        this.animationEndPosition = coord;
        this.animationDelta = {
            x: this.animationEndPosition.x - this.animationStartPosition.x,
            y: this.animationEndPosition.y - this.animationStartPosition.y
        };
    };
    Camera.prototype.moveTo = function (coord) {
        this.position.x = coord.x;
        this.position.y = coord.y;
    };
    return Camera;
}(game_entity_1["default"]));
exports["default"] = Camera;


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
var game_entity_1 = __webpack_require__(1);
var cursor_1 = __webpack_require__(20);
var layers_1 = __webpack_require__(3);
var Cursor = (function (_super) {
    __extends(Cursor, _super);
    function Cursor(parent, camera, gridPosition) {
        var _this = _super.call(this, parent) || this;
        _this.camera = camera;
        _this.gridPosition = gridPosition;
        _this.sprite = cursor_1.CURSOR_SPRITE;
        _this.tileSize = _this.sprite.dimensions.width;
        _this.halfTileSize = Math.floor(_this.tileSize / 2);
        _this.calculatePositionCoordinates();
        return _this;
    }
    Cursor.prototype.render = function (frame) {
        var screenCoord = this.camera.mapToScreenCoord(this.position);
        this.sprite.render(frame, screenCoord, layers_1.OVERLAY);
    };
    Cursor.prototype.moveTo = function (gridPosition) {
        this.gridPosition = gridPosition;
        this.calculatePositionCoordinates();
    };
    Cursor.prototype.calculatePositionCoordinates = function () {
        this.center = {
            x: this.gridPosition.x * this.tileSize,
            y: this.gridPosition.y * this.tileSize
        };
        this.position = {
            x: this.center.x - this.halfTileSize,
            y: this.center.y - this.halfTileSize
        };
    };
    return Cursor;
}(game_entity_1["default"]));
exports["default"] = Cursor;


/***/ }),
/* 14 */
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
var game_entity_1 = __webpack_require__(1);
var types_1 = __webpack_require__(5);
var layers_1 = __webpack_require__(3);
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(parent, camera, sprite) {
        var _this = _super.call(this, parent) || this;
        _this.camera = camera;
        _this.sprite = sprite;
        return _this;
    }
    Character.prototype.moveToTile = function (tile) {
        this.position = types_1.copyCoord(tile.position);
    };
    Character.prototype.render = function (frame) {
        var screenCoord = this.camera.mapToScreenCoord(this.position);
        this.sprite.render(frame, screenCoord, layers_1.CHARACTER);
    };
    return Character;
}(game_entity_1["default"]));
exports["default"] = Character;


/***/ }),
/* 15 */
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
var game_entity_1 = __webpack_require__(1);
var camera_1 = __webpack_require__(12);
var cursor_1 = __webpack_require__(13);
var clamp_1 = __webpack_require__(29);
var empty_field_1 = __webpack_require__(11);
var cell_grid_1 = __webpack_require__(2);
var character_1 = __webpack_require__(14);
var sword_girl_1 = __webpack_require__(19);
var princess_1 = __webpack_require__(18);
var LevelManager = (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager(parent, dimensions) {
        var _this = _super.call(this, parent) || this;
        _this.dimensions = dimensions;
        _this.movementClear = 0;
        _this.movementDelay = 325;
        _this.camera = new camera_1["default"](_this, dimensions);
        _this.cursor = new cursor_1["default"](_this, _this.camera, empty_field_1.emptyFieldLevel.cursorStart);
        _this.addChild(_this.camera);
        _this.addChild(_this.cursor);
        _this.buildLevelFromDefinition(empty_field_1.emptyFieldLevel);
        var startPosition = _this.levelGrid.cellAt(empty_field_1.emptyFieldLevel.cursorStart);
        _this.camera.moveTo(startPosition.center);
        _this.sampleCharacter = new character_1["default"](_this, _this.camera, sword_girl_1.createSprite());
        _this.addChild(_this.sampleCharacter);
        _this.sampleCharacter.moveToTile(startPosition);
        _this.sampleCharacter2 = new character_1["default"](_this, _this.camera, princess_1.createSprite());
        _this.addChild(_this.sampleCharacter2);
        _this.sampleCharacter2.moveToTile(_this.levelGrid.cellAt({
            x: empty_field_1.emptyFieldLevel.cursorStart.x + 1,
            y: empty_field_1.emptyFieldLevel.cursorStart.y
        }));
        return _this;
    }
    LevelManager.prototype.update = function (dtime, inputs) {
        var _this = this;
        _super.prototype.update.call(this, dtime, inputs);
        this.movementClear += dtime;
        if (this.movementClear > 0) {
            inputs.forEach(function (input) {
                if (input.INPUT_TYPE === "keyboard") {
                    var direction = { x: 0, y: 0 };
                    if (input.W) {
                        direction.y += 1;
                    }
                    if (input.A) {
                        direction.x -= 1;
                    }
                    if (input.S) {
                        direction.y -= 1;
                    }
                    if (input.D) {
                        direction.x += 1;
                    }
                    var newPosition = {
                        x: clamp_1.clamp(_this.cursor.gridPosition.x + direction.x, 0, _this.levelDimensions.width - 1),
                        y: clamp_1.clamp(_this.cursor.gridPosition.y + direction.y, 0, _this.levelDimensions.height - 1)
                    };
                    if (_this.isValidCursorTarget(newPosition)) {
                        _this.movementClear = -_this.movementDelay;
                        _this.cursor.moveTo(newPosition);
                        _this.camera.animateTo(_this.cursor.center, _this.movementDelay);
                    }
                }
            });
        }
        else {
            inputs.forEach(function (input) {
                if (input.INPUT_TYPE === "keyboard") {
                    if (!input.W && !input.A && !input.S && !input.D) {
                        _this.movementClear = 1;
                    }
                }
            });
        }
    };
    LevelManager.prototype.isValidCursorTarget = function (target) {
        return (target.x !== this.cursor.gridPosition.x ||
            target.y !== this.cursor.gridPosition.y) &&
            !this.levelGrid.cellAt(target).border_tile;
    };
    LevelManager.prototype.buildLevelFromDefinition = function (level) {
        var height = level.tiles.length;
        var width = level.tiles[0].length;
        this.levelDimensions = { width: width, height: height };
        this.levelGrid = new cell_grid_1["default"](this.levelDimensions);
        this.levelGrid.cells = [];
        for (var x = 0; x < width; x++) {
            this.levelGrid.cells[x] = [];
            for (var y = 0; y < height; y++) {
                /* note: level definitions and the level grid have rows and columns inverted from each other, hence why the
                 * lookups are swapped here. */
                var TileType = level.tiles[y][x];
                var tile = new TileType(this, this.camera, { x: x, y: y });
                this.levelGrid.cells[x][y] = tile;
                this.addChild(tile);
            }
        }
    };
    return LevelManager;
}(game_entity_1["default"]));
exports["default"] = LevelManager;


/***/ }),
/* 16 */
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
var level_tile_1 = __webpack_require__(4);
var grass_empty_1 = __webpack_require__(21);
var grass_sparse_1 = __webpack_require__(22);
var grass_thick_1 = __webpack_require__(23);
var random_1 = __webpack_require__(30);
var SPRITES = [
    grass_empty_1.createSprite,
    grass_empty_1.createSprite,
    grass_sparse_1.createSprite,
    grass_thick_1.createSprite
];
var GrassTile = (function (_super) {
    __extends(GrassTile, _super);
    function GrassTile(parent, camera, gridPosition) {
        return _super.call(this, parent, camera, random_1.randomElement(SPRITES)(), gridPosition) || this;
    }
    return GrassTile;
}(level_tile_1["default"]));
exports["default"] = GrassTile;


/***/ }),
/* 17 */
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
var level_tile_1 = __webpack_require__(4);
var pines_1 = __webpack_require__(24);
var WoodsTile = (function (_super) {
    __extends(WoodsTile, _super);
    function WoodsTile(parent, camera, gridPosition) {
        var _this = _super.call(this, parent, camera, pines_1.createSprite(), gridPosition) || this;
        _this.border_tile = true;
        return _this;
    }
    return WoodsTile;
}(level_tile_1["default"]));
exports["default"] = WoodsTile;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var pixels = [[null, null, null, null, null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#000000", null, null, "#000000", "#000000", "#000000", null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#E38836", "#000000", "#000000", "#E38836", "#E38836", "#E38836", "#000000", null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, "#000000", "#FFF700", "#000000", "#E38836", "#E38836", "#E38836", "#000000", "#E38836", "#E38836", "#000000", "#FFF700", "#000000", null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#FFF700", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#FFF700", "#000000", "#E38836", "#000000", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#E38836", "#000000", "#FFF700", "#FFF700", "#9BFF78", "#9BFF78", "#FFF700", "#FFF700", "#000000", "#E38836", "#E38836", "#E38836", "#000000", null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#E38836", "#E38836", "#000000", "#000000", "#FFF700", "#FFF700", "#000000", "#000000", "#E38836", "#E38836", "#E38836", "#E38836", "#000000", null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#E38836", "#E38836", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#E38836", "#E38836", "#000000", "#000000", null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#E38836", "#000000", "#C69B5B", "#FCFCFC", "#FCFCFC", "#FDDBA6", "#FDDBA6", "#FCFCFC", "#FCFCFC", "#C69B5B", "#000000", "#E38836", "#000000", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#E38836", "#000000", "#FDDBA6", "#000000", "#FCFCFC", "#FDDBA6", "#FDDBA6", "#000000", "#FCFCFC", "#FDDBA6", "#000000", "#E38836", "#000000", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#000000", "#000000", "#FDDBA6", "#000000", "#FCFCFC", "#FDDBA6", "#FDDBA6", "#000000", "#FCFCFC", "#FDDBA6", "#000000", "#000000", "#E38836", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#E38836", "#000000", "#C69B5B", "#FDDBA6", "#FDDBA6", "#FDDBA6", "#FDDBA6", "#FDDBA6", "#FDDBA6", "#C69B5B", "#000000", "#E38836", "#E38836", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#E38836", "#000000", "#C69B5B", "#FDDBA6", "#FDDBA6", "#FDDBA6", "#FDDBA6", "#C69B5B", "#000000", "#E38836", "#E38836", "#E38836", "#000000", null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#E38836", "#000000", "#000000", "#000000", "#C69B5B", "#C69B5B", "#FDDBA6", "#FDDBA6", "#000000", "#000000", "#000000", "#E38836", "#000000", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#000000", "#E0C1E0", "#FCFCFC", "#E0C1E0", "#000000", "#000000", "#000000", "#000000", "#E0C1E0", "#FCFCFC", "#E0C1E0", "#000000", "#E38836", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#000000", "#000000", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#E38836", "#E38836", "#000000", null, null, null, null, null, null], [null, null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#E38836", "#000000", "#000000", "#000000", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#000000", "#000000", "#000000", "#E38836", "#000000", "#E38836", "#000000", null, null, null, null, null], [null, null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#000000", "#000000", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#000000", "#000000", "#000000", "#E38836", "#000000", null, null, null, null, null], [null, null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#E38836", "#E38836", "#000000", null, null, null, null, null], [null, null, null, null, null, null, "#000000", "#000000", "#E38836", "#E38836", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#E38836", "#E38836", "#000000", "#000000", null, null, null, null], [null, null, null, null, null, null, "#000000", "#E38836", "#E38836", "#000000", "#E0C1E0", "#000000", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#000000", "#E0C1E0", "#000000", "#E38836", "#E38836", "#000000", null, null, null, null], [null, null, null, null, null, null, "#000000", "#E38836", "#000000", "#000000", "#000000", "#E0C1E0", "#000000", "#FFB3B3", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#FFB3B3", "#000000", "#E0C1E0", "#000000", "#000000", "#000000", "#E38836", "#000000", null, null, null, null], [null, null, null, null, null, "#000000", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#FFB3B3", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#FFB3B3", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#000000", null, null, null], [null, null, null, null, "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#FFB3B3", "#FFB3B3", "#FFB3B3", "#FFB3B3", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#000000", null, null], [null, null, null, null, null, "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", null, null, null], [null, null, null, null, null, null, "#000000", "#000000", "#000000", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#000000", "#000000", "#000000", null, null, null, null], [null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#000000", null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#E0C1E0", "#E0C1E0", "#E0C1E0", "#000000", "#000000", "#000000", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, "#000000", "#000000", "#000000", null, null, "#000000", "#000000", "#000000", null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];
function createSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createSprite = createSprite;
exports.PRINCESS_SPRITE = createSprite();


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var IMPORTED_SPRITE_DATA = {
    "schema": 2,
    "name": "sword girl low res",
    "whiteAsEmpty": true,
    "width": 20,
    "height": 20,
    "frames": [[[null, null, null, null, null, null, null, null, "#fff821", "#fff821", "#fff821", "#fff821", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, "#fff821", "#fff821", "#fff821", "#fff821", "#fff821", "#fff821", null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, null, null, null, "#fff821", "#fff821", "#fff821", "#fff821", "#fff821", "#fff821", null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, null, null, null, "#fff821", "#fd9d80", "#fd9d80", "#fff821", "#fff821", "#fff821", null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, null, null, null, "#fff821", "#fd9d80", "#abd8ff", "#fd9d80", "#fff821", "#fff821", null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, null, null, null, "#fff821", "#fd9d80", "#fd9d80", "#fd9d80", "#fd9d80", "#fff821", null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, null, null, "#fff821", "#fff821", "#fd9d80", "#fd9d80", "#ff0000", "#fd9d80", "#fff821", "#fff821", "#c0c0c0", null, null, null, null, null], [null, null, null, null, null, "#c02213", "#c02213", "#c02213", "#7aafff", "#fd9d80", "#fd9d80", "#7aafff", null, null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, "#c02213", "#c02213", "#c02213", "#c02213", "#c02213", "#7aafff", "#7aafff", "#7aafff", "#fd9d80", null, "#c0c0c0", null, null, null, null, null], [null, null, null, null, "#c02213", "#c02213", "#c0c0c0", "#c02213", "#c02213", "#7aafff", "#7aafff", "#7aafff", "#fd9d80", "#c02213", "#c02213", "#c02213", null, null, null, null], [null, null, null, null, "#c02213", "#c0c0c0", "#c02213", "#c0c0c0", "#c02213", "#7aafff", "#7aafff", "#7aafff", null, "#fd9d80", "#fd9d80", null, null, null, null, null], [null, null, null, null, "#c02213", "#c02213", "#c02213", "#c02213", "#c02213", "#7aafff", "#7aafff", "#7aafff", null, null, "#c02213", null, null, null, null, null], [null, null, null, null, null, "#c02213", "#c02213", "#c02213", "#7aafff", "#7aafff", "#7aafff", "#7aafff", "#7aafff", null, null, null, null, null, null, null], [null, null, null, null, null, null, "#c02213", null, "#fd9d80", null, null, "#fd9d80", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#fd9d80", null, null, "#fd9d80", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#fd9d80", null, null, "#fd9d80", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#fd9d80", null, null, "#fd9d80", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "#3b0000", null, null, "#3b0000", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]]
};
var pixels = IMPORTED_SPRITE_DATA.frames[0];
function createSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createSprite = createSprite;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var pixels = [[null, null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null, null], [null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null], ["#FF5252", "#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252", "#FF5252"], ["#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252"], ["#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252"], ["#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252"], ["#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252"], ["#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252"], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], ["#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252"], ["#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252"], ["#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252"], ["#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252"], ["#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252"], ["#FF5252", "#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252", "#FF5252"], [null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null], [null, null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", "#FF5252", null, null]];
function createCursorSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createCursorSprite = createCursorSprite;
exports.CURSOR_SPRITE = createCursorSprite();


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var IMPORTED_SPRITE_DATA = {
    "schema": 2,
    "name": "plain-grass",
    "whiteAsEmpty": true,
    "width": 32,
    "height": 32,
    "frames": [[["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"]]]
};
var pixels = IMPORTED_SPRITE_DATA.frames[0];
function createSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createSprite = createSprite;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var IMPORTED_SPRITE_DATA = {
    "schema": 2,
    "name": "plain-grass",
    "whiteAsEmpty": true,
    "width": 32,
    "height": 32,
    "frames": [[["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"]]]
};
var pixels = IMPORTED_SPRITE_DATA.frames[0];
function createSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createSprite = createSprite;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var IMPORTED_SPRITE_DATA = {
    "schema": 2,
    "name": "plain-grass",
    "whiteAsEmpty": true,
    "width": 32,
    "height": 32,
    "frames": [[["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a"], ["#7fc45a", "#4bb43f", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#2daa2d"], ["#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a"], ["#4bb43f", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a"], ["#4bb43f", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#2daa2d", "#7fc45a"], ["#4bb43f", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a"], ["#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#2daa2d", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#4bb43f", "#4bb43f", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"]]]
};
var pixels = IMPORTED_SPRITE_DATA.frames[0];
function createSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createSprite = createSprite;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var sprite_1 = __webpack_require__(0);
var IMPORTED_SPRITE_DATA = {
    "schema": 2,
    "name": "tree",
    "whiteAsEmpty": true,
    "width": 32,
    "height": 32,
    "frames": [[["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#2daa2d", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#2daa2d", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#339c22", "#339c22", "#2daa2d", "#339c22", "#339c22", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a"], ["#7fc45a", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#7fc45a", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a"], ["#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#7fc45a"], ["#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e"], ["#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#13871e"], ["#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#4bb43f", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#13871e"], ["#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22"], ["#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#2daa2d", "#339c22"], ["#339c22", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#70674d", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#70674d", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#2daa2d", "#2daa2d", "#339c22", "#918564", "#70674d", "#918564", "#339c22", "#2daa2d", "#2daa2d", "#339c22"], ["#339c22", "#339c22", "#339c22", "#13871e", "#918564", "#70674d", "#918564", "#13871e", "#339c22", "#339c22", "#339c22", "#339c22", "#339c22", "#339c22", "#13871e", "#918564", "#70674d", "#918564", "#13871e", "#339c22", "#339c22", "#339c22", "#339c22", "#339c22", "#13871e", "#918564", "#70674d", "#918564", "#13871e", "#339c22", "#339c22", "#339c22"], ["#13871e", "#13871e", "#13871e", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#13871e", "#13871e", "#13871e", "#13871e", "#13871e", "#13871e", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#13871e", "#13871e", "#13871e", "#13871e", "#13871e", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#13871e", "#13871e", "#13871e"], ["#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#70674d", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#70674d", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#70674d", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#70674d", "#70674d", "#70674d", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"], ["#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#918564", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#918564", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#7fc45a", "#918564", "#918564", "#918564", "#918564", "#918564", "#7fc45a", "#7fc45a", "#7fc45a"]]]
};
var pixels = IMPORTED_SPRITE_DATA.frames[0];
function createSprite() {
    return sprite_1["default"].newFromColorSheet(pixels);
}
exports.createSprite = createSprite;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var game_1 = __webpack_require__(6);
var run_loop_1 = __webpack_require__(9);
var webgl_1 = __webpack_require__(10);
var keyboard_input_1 = __webpack_require__(8);
var gamepad_input_1 = __webpack_require__(7);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var RGBColor = (function () {
    function RGBColor(r, g, b) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        this.index = -1;
        this.clear = false;
        this.setR(r);
        this.setG(g);
        this.setB(b);
    }
    RGBColor.prototype.setR = function (newR) {
        this.r = Math.floor(newR) % 256;
    };
    RGBColor.prototype.getR = function () {
        return this.r;
    };
    RGBColor.prototype.setG = function (newG) {
        this.g = Math.floor(newG) % 256;
    };
    RGBColor.prototype.getG = function () {
        return this.g;
    };
    RGBColor.prototype.setB = function (newB) {
        this.b = Math.floor(newB) % 256;
    };
    RGBColor.prototype.getB = function () {
        return this.b;
    };
    RGBColor.prototype.getColor = function () {
        return "#" + this.getR() + this.getG() + this.getB();
    };
    RGBColor.prototype.copyFromColor = function (color) {
        this.setR(color.getR());
        this.setG(color.getG());
        this.setB(color.getB());
    };
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
    RGBColor.prototype.clone = function () {
        return new RGBColor(this.getR(), this.getG(), this.getB());
    };
    RGBColor.fromHex = function (hex) {
        var color = new RGBColor();
        color.setFromHex(hex);
        return color;
    };
    return RGBColor;
}());
exports["default"] = RGBColor;


/***/ }),
/* 27 */
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
var BufferColor = (function () {
    function BufferColor(vertexGroup, colorBufferOffset) {
        this.vertexGroup = vertexGroup;
        this.colorBufferOffset = colorBufferOffset;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.opacity = 1.0;
        this.index = -1;
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
    BufferColor.prototype.getR = function () {
        throw new Error('Method not implemented.');
    };
    BufferColor.prototype.getG = function () {
        throw new Error('Method not implemented.');
    };
    BufferColor.prototype.getB = function () {
        throw new Error('Method not implemented.');
    };
    BufferColor.prototype.getColor = function () {
        throw new Error('Method not implemented.');
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
}());
exports["default"] = BufferColor;
var FakeBufferColor = (function (_super) {
    __extends(FakeBufferColor, _super);
    function FakeBufferColor(x, y) {
        var _this = _super.call(this, null, null) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    FakeBufferColor.prototype.setR = function (newR) { };
    FakeBufferColor.prototype.setG = function (newG) { };
    FakeBufferColor.prototype.setB = function (newB) { };
    FakeBufferColor.prototype.copyFromColor = function (color) { };
    return FakeBufferColor;
}(BufferColor));
exports.FakeBufferColor = FakeBufferColor;


/***/ }),
/* 28 */
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
var cell_grid_1 = __webpack_require__(2);
var buffer_color_1 = __webpack_require__(27);
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
    function GlFrame(dimensions, gl) {
        var _this = _super.call(this, dimensions, function (x, y) { return new buffer_color_1.FakeBufferColor(x, y); }) || this;
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
        var height = this.dimensions.height;
        var width = this.dimensions.width;
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


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function clamp(value, minimum, maximum) {
    if (value < minimum) {
        return minimum;
    }
    if (value > maximum) {
        return maximum;
    }
    return value;
}
exports.clamp = clamp;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
function randomInt(min, max) {
    if (arguments.length === 1) {
        max = min;
        min = 0;
    }
    if (max < min) {
        _a = [min, max], max = _a[0], min = _a[1];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
    var _a;
}
exports.randomInt = randomInt;
function randomElement(entities) {
    if (!entities || !entities.length) {
        return null;
    }
    return entities[randomInt(entities.length - 1)];
}
exports.randomElement = randomElement;


/***/ })
/******/ ]);