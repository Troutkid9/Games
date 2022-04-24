/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./src/basketball.js":
      /*!***************************!*\
  !*** ./src/basketball.js ***!
  \***************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Basketball; });\nclass Basketball {\n    constructor(ctx, x, y, rotationAngle) {\n        this.ctx = ctx;\n        this.mass = 0.625;\n        this.image = new Image();\n        this.image.src = './assets/images/basketball.png';\n        this.diameter = 36;\n        this.x = x;\n        this.y = y;\n        this.lastX = x;\n        this.lastY = y;\n        this.vX = null;\n        this.vY = null;\n        this.isThrown = false;\n        this.rotationAngle = rotationAngle;\n    }\n\n    draw() {\n        if (this.rotationAngle !== 0) {\n            this.ctx.save();\n            this.ctx.translate(this.x+this.diameter/2, this.y+this.diameter/2);\n            this.ctx.rotate(this.rotationAngle * Math.PI/180);\n            this.ctx.drawImage(this.image, 0-this.diameter/2, 0-this.diameter/2, 36, 36);\n            this.ctx.restore();\n        } else\n            this.ctx.drawImage(this.image, this.x, this.y, 36, 36);\n    }\n    \n    getInitialVelocity(time, angle) {\n        const initialVelocity = time*20;\n        return {\n            vX: initialVelocity * Math.cos(angle * Math.PI/180),\n            vY: initialVelocity * Math.sin(angle * Math.PI/180)\n        };\n    }\n    \n    setPosition(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    move(vX, vY, time) {\n        this.rotationAngle -= Math.sqrt(vX * vX + vY * vY)/2;\n        this.x += vX;\n        this.y -= (vY - (9.81 * time));\n        return [this.x, this.y];\n    }\n}\n\n//# sourceURL=webpack:///./src/basketball.js?"
        );

        /***/
      },

    /***/ "./src/event_handlers.js":
      /*!*******************************!*\
      !*** ./src/event_handlers.js ***!
      \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventHandlers; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");\n\n\nclass EventHandlers {\n    constructor(game) {\n        this.startTime = null;\n        this.elapsed = null;\n        this.game = game;\n        this.keydownHandler = this.keydownHandler.bind(this);\n        this.keyupHandler = this.keyupHandler.bind(this);\n    }\n\n    keydownHandler(e) {\n        e.preventDefault();\n        if (e.keyCode === 32) {\n            if (this.game.started) {\n                this.startTime = this.startTime || Date.now();\n                this.game.shotHelpers.startTime = this.startTime;\n                if (this.game.basketball.isThrown)\n                    this.startTime = null;  \n            }\n        }\n        if (e.keyCode === 37) {            \n            if (this.game.started) {\n                this.game.player.x += -8;\n                this.game.basketball.x += -8;\n            }\n        }\n        if (e.keyCode === 39) {\n            if (this.game.started) {\n                this.game.player.x += 8;\n                this.game.basketball.x += 8;\n            }\n        }\n        if (e.keyCode === 38) {\n            if (this.game.started) {\n            this.game.shotAngle = Math.min(this.game.shotAngle+2, 88);\n            }\n        }\n        if (e.keyCode === 40) {\n            if (this.game.started) {\n            this.game.shotAngle = Math.max(this.game.shotAngle-2, 0);\n            }\n        }\n    }\n\n    keyupHandler(e) {\n        e.preventDefault();\n        if (e.keyCode === 32) {\n            if (this.game.started && !this.game.basketball.isThrown) {\n                this.elapsed = (Date.now() - this.startTime)/1000;\n                this.elapsed = Math.min(this.elapsed, 0.75);\n                this.startTime = null;\n                this.game.initialVelocites = this.game.basketball.getInitialVelocity(this.elapsed, this.game.shotAngle);\n                this.game.vX = this.game.initialVelocites.vX;\n                this.game.vY = this.game.initialVelocites.vY;\n                this.game.basketball.isThrown = true;\n                this.game.t = 0;\n            }\n        }\n        if (e.keyCode === 37) {\n            if (this.game.started) {\n                this.game.player.x += -8;\n                this.game.basketball.x += -8;\n            }\n        }\n        if (e.keyCode === 39) {\n            if (this.game.started) {\n                this.game.player.x += 8;\n                this.game.basketball.x += 8;\n            }\n        }\n        if (e.keyCode === 38) {\n            if (this.game.started) {\n                this.game.shotAngle = Math.min(this.game.shotAngle+2, 88);\n            }\n        }\n        if (e.keyCode === 40) {\n            if (this.game.started) {\n                this.game.shotAngle = Math.max(this.game.shotAngle-2, 0);\n            }\n        }\n\n        if (e.keyCode === 13) {\n            if (this.game.over())\n                _index_js__WEBPACK_IMPORTED_MODULE_0__["playAgainButton"].click();\n            else\n                _index_js__WEBPACK_IMPORTED_MODULE_0__["playButton"].click();\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/event_handlers.js?'
        );

        /***/
      },

    /***/ "./src/game.js":
      /*!*********************!*\
      !*** ./src/game.js ***!
      \*********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });\n/* harmony import */ var _basketball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basketball.js */ "./src/basketball.js");\n/* harmony import */ var _hoop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoop.js */ "./src/hoop.js");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/player.js");\n/* harmony import */ var _shot_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shot_helpers.js */ "./src/shot_helpers.js");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.js */ "./src/index.js");\n/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ "./src/sound.js");\n\n\n\n\n\n\n\nclass Game {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"](ctx, _index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"] - 620, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]-150);\n        this.basketball = new _basketball_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, this.player.x + 100, this.player.y - 4, -90);\n        this.hoop = new _hoop_js__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);\n        this.started = false;\n        this.collided = false;\n        this.initialVelocities = null;\n        this.vX = null;\n        this.vY = null;\n        this.t = null;\n        this.shotAngle = 60;\n        this.score = 0;\n        this.scored = false;\n        this.missedShots = 0;\n        this.shotHelpers = new _shot_helpers_js__WEBPACK_IMPORTED_MODULE_3__["default"](ctx, this.basketball);\n        this.draw = this.draw.bind(this);\n        this.clearCanvas = this.clearCanvas.bind(this);\n        this.bounceSound = new _sound__WEBPACK_IMPORTED_MODULE_5__["default"]("assets/audio/bounce.mp3");\n        this.swishSound = new _sound__WEBPACK_IMPORTED_MODULE_5__["default"]("assets/audio/swish.mp3");\n        this.crowdSound = new _sound__WEBPACK_IMPORTED_MODULE_5__["default"]("assets/audio/crowd.mp3");\n    }\n\n    play() {\n        this.started = true;\n        this.crowdSound.play();\n    }\n\n    drawScene() {\n        this.ctx.beginPath();\n        this.ctx.fillStyle = "rgba(50, 100, 75)";\n        this.ctx.fillRect(0, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"], _index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"], _index_js__WEBPACK_IMPORTED_MODULE_4__["cHeight"]);\n        this.ctx.ellipse(_index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]-10, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]+95, 750, 85, 0, -Math.PI/2, Math.PI/2+.111, true);\n        this.ctx.strokeStyle = \'white\';\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n        this.ctx.moveTo(_index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]-4, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]);\n        this.ctx.lineTo(_index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]-100, _index_js__WEBPACK_IMPORTED_MODULE_4__["cHeight"]);\n        this.ctx.stroke();\n        this.ctx.closePath();\n        this.ctx.beginPath();\n        this.ctx.save();\n        this.ctx.transform(1,0,-0.5,1,0,0);\n        this.ctx.fillStyle = \'white\';\n        this.ctx.fillRect(_index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]-189, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]+48, 472, 84);\n        this.ctx.fillStyle = \'red\';\n        this.ctx.fillRect(_index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]-187, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]+50, 470, 80);\n        this.ctx.ellipse(_index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]-189, _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]+90, 140, 41, 0, -Math.PI/2, Math.PI/2, true);\n        this.ctx.strokeStyle = \'white\';\n        this.ctx.lineWidth = 2;\n        this.ctx.stroke();\n        this.ctx.closePath();\n        this.ctx.restore();\n    }\n\n    drawScore() {\n        this.ctx.font = \'48px Oswald\';\n        this.ctx.fillStyle = \'green\';\n        this.ctx.fillText(`Score: ${this.score}`,450, 50);\n        this.ctx.font = \'24px Oswald\';\n        this.ctx.fillStyle = \'red\';\n        this.ctx.fillText(`Attempts Remaining: ${3-this.missedShots}`, 720, 32);\n    }\n    \n    clearCanvas() {\n        this.ctx.clearRect(0,0, _index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"], _index_js__WEBPACK_IMPORTED_MODULE_4__["cHeight"]);\n        this.drawScene();\n        this.hoop.draw();\n        this.drawScore();\n    }\n\n    resetVars() {\n        if (this.player.x < 64) {\n            this.player.x = 64;\n        } else if (this.player.x > 752) {\n            this.player.x = 752;\n        }\n        if (this.basketball.x > (this.player.x + 100) && this.player.x >= 752 || \n            this.basketball.x < (this.player.x + 100) || \n            this.basketball.y > _index_js__WEBPACK_IMPORTED_MODULE_4__["ground"]+80) {\n            if (this.basketball.x < _index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"]) {\n                this.bounceSound.play();\n                wait(5000);\n            }\n            this.basketball.x =  this.player.x + 100;\n            this.basketball.y = this.player.y - 4;\n            if (this.scored) {\n                this.score += 2;\n                if (this.player.x < 184)\n                this.score += 1;\n                this.scored = false;\n            } else if (this.basketball.isThrown) {\n                this.missedShots += 1;\n            }\n            this.basketball.isThrown = false;\n            this.shotHelpers.startTime = null;\n            this.shotHelpers.elapsed = 0;\n            this.collided = false;\n            this.t = null;\n            this.basketball.rotationAngle = -90;\n        }\n    }\n\n    collisionDetection(obstacle) {\n        const ballX = this.basketball.x + this.vX;\n        const ballY = this.basketball.y - (this.vY - (9.81 * this.t));\n        const ballEndX = ballX + this.basketball.diameter;\n        const ballEndY = ballY + this.basketball.diameter;\n        let { x, y, width, height } = obstacle;\n        let endX = x + width;\n        let endY = y + height;\n        \n        if (obstacle.type === \'Rim\' && !(this.basketball.y > endY)) {\n            if ( (ballX >= x+4 && ballEndX <= endX-4) && (ballEndY >= y && ballY <= y) ) {\n                this.scored = true;\n                this.swishSound.play();\n                return false;\n            }\n            const rimLeft = { x, y, width: 4, height };\n            const rimRight = { x: x+76, y, width: 4, height };\n            this.collisionDetection(rimLeft);\n            this.collisionDetection(rimRight);\n        } \n        else if ( \n            ( (ballEndX >= x && ballX <= x) || (ballX <= endX && ballEndX >= endX) ) &&\n            ( (ballY <= y && ballEndY >= y) || (ballY <= y && ballEndY >= endY) || (ballY <= endY && ballEndY >= endY)  || (ballY >= y && ballEndY <= endY) ) \n        ) {\n            // console.log(`Vertical, Current Pos: ${[this.basketball.x, this.basketball.y]}, New Pos: ${[ballX, ballY]}, ${obstacle.type}`);\n            return { type: \'vertical\'};\n        }\n        else if (\n            ( (ballEndY >= y && ballY <= y) || (ballY <= endY && ballEndY >= endY) ) &&\n            ( (ballX <= x && ballEndX >= x) || (ballX >= x && ballEndX <= endX) || (ballX <= x && ballEndX >= endX) || (ballX <= endX && ballEndX >= endX) )\n        ) {\n            // console.log(`Horizontal, Current Pos: ${[this.basketball.x, this.basketball.y]}, New Pos: ${[ballX, ballY]}, ${obstacle.type}`);\n            return {type: \'horizontal\'};\n        }\n        return false;\n    }\n\n    handleThrownBall() {\n        this.collided = this.collisionDetection(this.hoop.backboard) \n        || this.collisionDetection(this.hoop.rim, this.basketball.lastY);\n        if (this.collided) {\n            if (this.collided.type === \'vertical\')\n            this.vX = -this.vX;\n            else {\n                this.vY = -this.vY;\n                this.t = 0;\n            }\n            // console.log(this.collided, [this.basketball.x, this.basketball.y], this.vY-(9.81 * this.t));\n            this.collided = false;\n        }\n        this.basketball.lastX = this.basketball.x;\n        this.basketball.lastY = this.basketball.y;\n        [this.basketball.x, this.basketball.y] = this.basketball.move(this.vX, this.vY, this.t);\n        this.t += 1/60;\n    }\n\n    over() {\n        return (this.missedShots === 3);\n    }\n    \n    draw() {\n        this.clearCanvas();\n        this.player.draw();\n        this.resetVars();\n        if (this.basketball.isThrown) {\n            this.handleThrownBall();\n        } else {\n            this.shotHelpers.drawArrow(this.shotAngle);\n        }\n        this.shotHelpers.drawPowerBar();\n        this.basketball.draw();\n        if (this.over()) {\n            this.started = false;\n            const gameOverScreen = document.getElementsByClassName(\'end-screen\')[0];\n            const scoreEl = document.createElement(\'p\');\n            scoreEl.classList.add(\'game-over-description\');\n            scoreEl.appendChild(document.createTextNode(`You scored ${this.score} points`));\n            gameOverScreen.appendChild(scoreEl);\n            gameOverScreen.classList.remove(\'hidden\');\n            this.clearCanvas();\n        } else \n            window.requestAnimationFrame(this.draw);\n    }\n\n    reset() {\n        this.resetVars();\n        this.score = 0;\n        this.player.x = _index_js__WEBPACK_IMPORTED_MODULE_4__["cWidth"] - 620;\n        this.basketball.x = this.player.x + 100;\n        this.shotAngle = 60;\n        this.missedShots = 0;\n        this.play();\n        const oldScore = document.getElementsByClassName(\'game-over-description\')[0];\n        oldScore.parentNode.removeChild(oldScore);\n    }\n\n}\n\nfunction sleep(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function wait(ms) {\n    await sleep(ms);\n}\n\n//# sourceURL=webpack:///./src/game.js?'
        );

        /***/
      },

    /***/ "./src/hoop.js":
      /*!*********************!*\
      !*** ./src/hoop.js ***!
      \*********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hoop; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");\n\n\nclass Hoop {\n    constructor(ctx) {\n        this.ctx = ctx;\n        this.rim = {\n            x: _index_js__WEBPACK_IMPORTED_MODULE_0__["cWidth"] - 144,\n            y: _index_js__WEBPACK_IMPORTED_MODULE_0__["cHeight"] - 550,\n            width: 80,\n            height: 5,\n            type: \'Rim\',\n        };\n\n        this.backboard = {\n            x: _index_js__WEBPACK_IMPORTED_MODULE_0__["cWidth"] - 64,\n            y: _index_js__WEBPACK_IMPORTED_MODULE_0__["cHeight"]-650,\n            width: 8,\n            height: 140,\n            type: \'Backboard\',\n        };\n    }\n\n    draw() {\n        this.drawPole();\n        this.drawBackboard();\n        this.drawNet();\n        this.drawRim();\n    }\n\n    drawRim() {\n        const { x, y, width, height } = this.rim;\n        this.ctx.beginPath();\n        this.ctx.rect(x, y, width, height);\n        this.ctx.fillStyle = \'red\';\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawNet() {\n        const netLength = 64;\n        const { x, y, width } = this.rim;\n        const startX = x + 2;\n        const endX = x + width - 2;\n        const startY = y + 2;\n        const endY = y+netLength;\n        this.ctx.beginPath();\n        this.ctx.strokeStyle = \'white\';\n        this.ctx.lineWidth = \'1\';\n\n        this.ctx.moveTo(startX, startY);\n        this.ctx.lineTo(x+16, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+8, startY);\n        this.ctx.lineTo(x+24, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+16, startY);\n        this.ctx.lineTo(x+32, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+24, startY);\n        this.ctx.lineTo(x+40, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+32, startY);\n        this.ctx.lineTo(x+48, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+40, startY);\n        this.ctx.lineTo(x+56, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+48, startY);\n        this.ctx.lineTo(x+64, endY);\n        this.ctx.stroke();\n\n        this.ctx.moveTo(startX+56, startY);\n        this.ctx.lineTo(x+68, endY-16);\n        this.ctx.stroke();\n        this.ctx.moveTo(startX+64, startY);\n        this.ctx.lineTo(x+72, endY-36);\n        this.ctx.stroke();\n        // this.ctx.moveTo(startX+62, startY);\n        // this.ctx.lineTo(x+68, endY-52);\n        // this.ctx.stroke();\n        \n        // this.ctx.moveTo(cWidth-100, startY);\n        // this.ctx.lineTo(cWidth-110, y+58);\n        // this.ctx.stroke();\n        this.ctx.moveTo(endX-64, startY);\n        this.ctx.lineTo(x+width-72, endY-36);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-56, startY);\n        this.ctx.lineTo(x+width-68, endY-16);\n        this.ctx.stroke();\n        \n        this.ctx.moveTo(endX-48, startY);\n        this.ctx.lineTo(x+width-64, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-40, startY);\n        this.ctx.lineTo(x+width-56, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-32, startY);\n        this.ctx.lineTo(x+width-48, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-24, startY);\n        this.ctx.lineTo(x+width-40, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-16, startY);\n        this.ctx.lineTo(x+width-32, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX-8, startY);\n        this.ctx.lineTo(x+width-24, endY);\n        this.ctx.stroke();\n        this.ctx.moveTo(endX, startY);\n        this.ctx.lineTo(x+width-16, endY);\n        this.ctx.stroke();\n        \n    \n        this.ctx.closePath();\n    }\n\n    drawBackboard() {\n        const { x, y, width, height } = this.backboard;\n        this.ctx.beginPath();\n        this.ctx.rect(x, y, width, height);\n        this.ctx.fillStyle = \'white\';\n        this.ctx.fill();\n        this.ctx.closePath();\n        this.ctx.beginPath();\n        this.ctx.rect(x,y, width, height/7);\n        this.ctx.fillStyle = \'rgb(2, 162, 255)\';\n        this.ctx.fill();\n        this.ctx.closePath();\n        this.ctx.beginPath();\n        this.ctx.rect(x, y+height*6/7, width, height/7);\n        this.ctx.fillStyle = \'rgb(2, 162, 255)\';\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    drawPole() {\n        const poleY = _index_js__WEBPACK_IMPORTED_MODULE_0__["cHeight"]-570;\n        this.ctx.beginPath();\n        this.ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__["cWidth"]-60, poleY, 40, 12);\n        this.ctx.rect(_index_js__WEBPACK_IMPORTED_MODULE_0__["cWidth"] - 25, poleY, 12, _index_js__WEBPACK_IMPORTED_MODULE_0__["ground"]-120);\n        this.ctx.fillStyle = \'gray\';\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n}\n\n//# sourceURL=webpack:///./src/hoop.js?'
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
      /*! exports provided: canvas, cHeight, cWidth, ground, playButton, playAgainButton */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cHeight\", function() { return cHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cWidth\", function() { return cWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ground\", function() { return ground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playButton\", function() { return playButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playAgainButton\", function() { return playAgainButton; });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_handlers.js */ \"./src/event_handlers.js\");\n\n\n\nwindow.requestAnimationFrame = window.requestAnimationFrame || \nwindow.webkitRequestAnimationFrame || \nwindow.mozRequestAnimationFrame ||\nwindow.oRequestAnimationFrame || \nwindow.msRequestAnimationFrame;\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext(\"2d\");\nconst cHeight = canvas.height;\nconst cWidth = canvas.width;\nconst ground = cHeight - (cHeight/4);\n\nlet game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\nconst eventHandlers = new _event_handlers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game);\n\nconst playButton = document.getElementById('play-button');\nconst playAgainButton = document.getElementById('play-again-button');\n\nconst handlePlay = () => {\n    document.getElementsByClassName('start-screen')[0].classList.add('hidden');\n    game.play();\n    window.requestAnimationFrame(game.draw);\n};\n\nconst handlePlayAgain = () => {\n    const gameOverScreen = document.getElementsByClassName('end-screen')[0];\n    game.reset();\n    gameOverScreen.classList.add('hidden');\n    window.requestAnimationFrame(game.draw);\n};\n\n\nplayButton.addEventListener('click', handlePlay);\nplayAgainButton.addEventListener('click', handlePlayAgain);\ndocument.addEventListener('keydown', eventHandlers.keydownHandler);\ndocument.addEventListener('keyup', eventHandlers.keyupHandler);\n\ngame.drawScene();\n\n//# sourceURL=webpack:///./src/index.js?"
        );

        /***/
      },

    /***/ "./src/player.js":
      /*!***********************!*\
      !*** ./src/player.js ***!
      \***********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n\nclass Player {\n    constructor(ctx, x, y) {\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.image = new Image();\n        this.image.src = './assets/images/player.svg';\n    }\n\n    draw() {\n        const imgWidth = 156;\n        const imgHeight = 324;\n        this.ctx.drawImage(this.image, 380, 180, imgWidth, imgHeight, this.x, this.y, imgWidth-30, imgHeight);\n    }\n\n    setPosition(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?"
        );

        /***/
      },

    /***/ "./src/shot_helpers.js":
      /*!*****************************!*\
      !*** ./src/shot_helpers.js ***!
      \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShotHelpers; });\nclass ShotHelpers {\n    constructor(ctx, basketball) {\n        this.ctx = ctx;\n        this.basketball = basketball;\n        this.startTime = null;\n        this.elapsed = 0;\n    }\n\n    drawArrow(shotAngle) {\n        const startX = this.basketball.x+42;\n        const startY = this.basketball.y-12;\n        this.ctx.beginPath();\n        this.ctx.moveTo(startX, startY);\n        const endX = startX + 50*Math.cos(shotAngle * Math.PI / 180);\n        const endY = startY - 50*Math.sin(shotAngle * Math.PI / 180);\n        this.ctx.lineTo(endX, endY);\n        this.ctx.strokeStyle = 'black';\n        this.ctx.lineWidth = '3';\n        this.ctx.stroke();\n        this.ctx.stroke();\n        this.ctx.closePath();\n    }\n\n    drawPowerBar() {\n        const barX = 20;\n        const barY = 240;\n        const height = 300;\n        const width = 50;\n        if (this.startTime) {\n            if (!this.basketball.isThrown)\n                this.elapsed = (Date.now() - this.startTime)/1000;\n        }\n        this.elapsed = Math.min(this.elapsed, 0.75);\n        const displacement = 300 - 400*this.elapsed;\n        this.ctx.strokeStyle = 'white';\n        this.ctx.lineWidth = 3;\n        this.ctx.strokeRect(barX, barY, width, height);\n        this.ctx.fillStyle = 'black';\n        this.ctx.fillRect(barX, barY, width, height);\n        this.ctx.fillStyle = 'green';\n        this.ctx.fillRect(barX, barY+displacement, width, 400*this.elapsed);\n    }\n}\n\n//# sourceURL=webpack:///./src/shot_helpers.js?"
        );

        /***/
      },

    /***/ "./src/sound.js":
      /*!**********************!*\
      !*** ./src/sound.js ***!
      \**********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sound; });\nclass sound {\n    constructor(src) {\n        this.sound = document.createElement("audio");\n        this.sound.src = src;\n        this.sound.setAttribute("preload", "auto");\n        this.sound.setAttribute("controls", "none");\n        this.sound.style.display = "none";\n        document.body.appendChild(this.sound);\n        this.play = function () {\n            this.sound.play();\n        };\n        this.stop = function () {\n            this.sound.pause();\n        };\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/sound.js?'
        );

        /***/
      },

    /******/
  }
);
