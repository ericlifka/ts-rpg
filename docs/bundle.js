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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Game = (function () {
    function Game() {
    }
    return Game;
}());
exports["default"] = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var gl_frame_1 = __webpack_require__(7);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var game_1 = __webpack_require__(1);
var webgl_1 = __webpack_require__(2);
var width = 250;
var height = 150;
var game = new game_1["default"]();
var renderer = new webgl_1["default"]({ width: width, height: height });
var frame = renderer.newRenderFrame();
frame.clear();
frame.cellAt(10, 10).setR(1.0);
renderer.renderFrame();


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
var rgb_color_1 = __webpack_require__(5);
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
                handler(this.cellAt(x, y), x, y);
            }
        }
    };
    CellGrid.prototype.cellAt = function (x, y) {
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
/* 5 */
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
var color_1 = __webpack_require__(0);
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
var color_1 = __webpack_require__(0);
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
var cell_grid_1 = __webpack_require__(4);
var buffer_color_1 = __webpack_require__(6);
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