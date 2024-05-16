/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scripts/DOM.js":
/*!****************************!*\
  !*** ./src/scripts/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ \"./src/scripts/gameController.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar control;\nfunction ScreenController() {\n  var board2 = document.querySelector(\".board2\");\n  control = (0,_gameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var dialog = document.querySelector(\"dialog\");\n  var gameOver = document.querySelector(\".over\");\n  var updateScreen = function updateScreen(activePlayer) {\n    activePlayer.div.innerHTML = \"\";\n    activePlayer.board().forEach(function (row, x) {\n      row.forEach(function (cell, y) {\n        var cellBtn = document.createElement(\"button\");\n        cellBtn.classList.add(\"cell\");\n        cellBtn.dataset.cell = \"\".concat(x, \"-\").concat(y);\n        if (!cell.isHit) {\n          cellBtn.classList.add(\"unchecked\");\n        } else if (cell.isHit) {\n          cellBtn.style.backgroundColor = \"hsl(207, 72%, 60%)\";\n        }\n        if (activePlayer.player === \"Computer\" && cell.hasShip) {\n          cellBtn.style.backgroundColor = \" hsl(0, 0%, 20%)\";\n          cellBtn.classList.remove(\"unchecked\");\n        }\n        if (cell.isHit && cell.ship) {\n          cellBtn.style.backgroundColor = \"hsl(0, 100%, 60%)\";\n        }\n        activePlayer.div.appendChild(cellBtn);\n      });\n    });\n  };\n  var playComputerRound = function playComputerRound() {\n    var x, y;\n    var result = false;\n    var counter = 0;\n    var previousHits = {};\n    while (result === \"hit\" || result === false) {\n      if (Object.keys(previousHits).length > 0 && counter < 10) {\n        var lastHit = previousHits[Object.keys(previousHits)[0]];\n        x = lastHit.x;\n        y = lastHit.y;\n        var directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n        var randomIndex = Math.floor(Math.random() * directions.length);\n        var randomDirection = directions[randomIndex];\n        x += randomDirection[0];\n        y += randomDirection[1];\n        x = Math.max(0, Math.min(x, 9));\n        y = Math.max(0, Math.min(y, 9));\n        counter++;\n        if (previousHits[\"\".concat(x, \"-\").concat(y)]) {\n          continue;\n        }\n      } else {\n        // If no previous hits, fall back to random attack\n        x = Math.floor(Math.random() * 10);\n        y = Math.floor(Math.random() * 10);\n      }\n      result = control.playRound(x, y);\n      previousHits[\"\".concat(x, \"-\").concat(y)] = {\n        x: x,\n        y: y\n      };\n      if (result === \"hit\") {\n        // Update previous hits if it's a hit\n        previousHits[\"\".concat(x, \"-\").concat(y)] = {\n          x: x,\n          y: y\n        };\n      }\n      if (result === \"over\") return result;\n    }\n    return result;\n  };\n  var clickHandler = function clickHandler(e) {\n    var currentPlayer = control.getActivePlayer();\n    var x, y;\n    var target = e.target.dataset.cell;\n    var _target$split = target.split(\"-\");\n    var _target$split2 = _slicedToArray(_target$split, 2);\n    x = _target$split2[0];\n    y = _target$split2[1];\n    var result = control.playRound(x, y);\n    updateScreen(currentPlayer);\n    if (!result) return;\n    if (result === \"over\") {\n      gameOver.innerHTML = \"\".concat(control.getActivePlayer().player, \" Won!\");\n      dialog.show();\n      board2.removeEventListener(\"click\", clickHandler);\n      return;\n    }\n    if (result === \"hit\") return false;\n    control.switchPlayerTurn();\n\n    // play computer move then switch move again\n    var computerResult = playComputerRound();\n    updateScreen(control.getActivePlayer());\n    if (computerResult === \"over\") {\n      // finish game\n      gameOver.innerHTML = \"\".concat(control.getActivePlayer().player, \" Won!\");\n      dialog.show();\n      board2.removeEventListener(\"click\", clickHandler);\n      return;\n    }\n    control.switchPlayerTurn();\n  };\n  board2.addEventListener(\"click\", clickHandler);\n\n  // initial render\n  updateScreen(control.getActivePlayer());\n  control.switchPlayerTurn();\n  updateScreen(control.getActivePlayer());\n  control.switchPlayerTurn();\n}\nfunction init() {\n  ScreenController();\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/DOM.js?");

/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nfunction GameBoard() {\n  var rows = 10;\n  var columns = 10;\n  var board = [];\n  var cell = {\n    isHit: false,\n    hasShip: false,\n    ship: null\n  };\n  var hp = 17;\n  var AircraftCarrier = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n  var Battleship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n  var Cruiser = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n  var Submarine = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n  var Destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n  var createBoard = function createBoard() {\n    for (var i = 0; i < rows; i++) {\n      board[i] = [];\n      for (var j = 0; j < columns; j++) {\n        board[i].push(_objectSpread({}, cell));\n      }\n    }\n  };\n  var placeShip = function placeShip(ship, startX, startY, orientation) {\n    for (var i = 0; i < ship.hp; i++) {\n      if (orientation === \"vertical\") {\n        board[startX + i][startY].hasShip = true;\n        board[startX + i][startY].ship = ship;\n      } else {\n        board[startX][startY + i].hasShip = true;\n        board[startX][startY + i].ship = ship;\n      }\n    }\n  };\n  var getHp = function getHp() {\n    return hp;\n  };\n  var getBoard = function getBoard() {\n    return board;\n  };\n  var placeShipsRandomly = function placeShipsRandomly() {\n    var ships = [AircraftCarrier, Battleship, Cruiser, Submarine, Destroyer];\n    ships.forEach(function (ship) {\n      var isPlaced = false;\n      while (!isPlaced) {\n        var startX = Math.floor(Math.random() * columns);\n        var startY = Math.floor(Math.random() * rows);\n        var orientation = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n\n        // Check if the ship can be placed at the generated coordinates\n        if (canPlaceShip(ship, startX, startY, orientation)) {\n          placeShip(ship, startX, startY, orientation);\n          isPlaced = true;\n        }\n      }\n    });\n  };\n  var canPlaceShip = function canPlaceShip(ship, startX, startY, orientation) {\n    if (orientation === \"vertical\") {\n      if (startX + ship.hp > rows) return false;\n      for (var i = 0; i < ship.hp; i++) {\n        if (board[startX + i][startY].hasShip) return false;\n        if (hasAdjacentShip(board, startX + i, startY)) return false;\n      }\n    } else {\n      if (startY + ship.hp > rows) return false;\n      for (var _i = 0; _i < ship.hp; _i++) {\n        if (board[startX][startY + _i].hasShip) return false;\n        if (hasAdjacentShip(board, startX, startY + _i)) return false;\n      }\n    }\n    return true;\n  };\n  createBoard();\n  placeShipsRandomly();\n  var receiveAttack = function receiveAttack(x, y) {\n    if (board[x][y].isHit === true) return false;\n    board[x][y].isHit = true;\n    if (board[x][y].hasShip) {\n      board[x][y].ship.hit();\n      hp--;\n      console.log(hp);\n      if (hp === 0) return \"over\";\n      return \"hit\";\n    }\n    return \"switch\";\n  };\n  return {\n    receiveAttack: receiveAttack,\n    getBoard: getBoard,\n    getHp: getHp\n  };\n}\nfunction hasAdjacentShip(board, x, y) {\n  var rows = board.length;\n  var cols = board[0].length;\n  // Check left adjacent cell\n  if (y > 0 && board[x][y - 1].hasShip) {\n    return true;\n  }\n\n  // Check right adjacent cell\n  if (y < cols - 1 && board[x][y + 1].hasShip) {\n    return true;\n  }\n\n  // Check top adjacent cell\n  if (x > 0 && board[x - 1][y].hasShip) {\n    return true;\n  }\n\n  // Check bottom adjacent cell\n  if (x < rows - 1 && board[x + 1][y].hasShip) {\n    return true;\n  }\n\n  // Check top-left diagonal cell\n  if (x > 0 && y > 0 && board[x - 1][y - 1].hasShip) {\n    return true;\n  }\n\n  // Check top-right diagonal cell\n  if (x > 0 && y < cols - 1 && board[x - 1][y + 1].hasShip) {\n    return true;\n  }\n\n  // Check bottom-left diagonal cell\n  if (x < rows - 1 && y > 0 && board[x + 1][y - 1].hasShip) {\n    return true;\n  }\n\n  // Check bottom-right diagonal cell\n  if (x < rows - 1 && y < cols - 1 && board[x + 1][y + 1].hasShip) {\n    return true;\n  }\n  return false;\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/gameBoard.js?");

/***/ }),

/***/ "./src/scripts/gameController.js":
/*!***************************************!*\
  !*** ./src/scripts/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/scripts/gameBoard.js\");\n\nfunction GameController() {\n  var gameBoard1 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var gameBoard2 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  var players = [{\n    player: \"Player 1\",\n    board: gameBoard2.getBoard,\n    div: document.querySelector(\".board2\"),\n    att: gameBoard2.receiveAttack,\n    hp: gameBoard2.getHp\n  }, {\n    player: \"Computer\",\n    board: gameBoard1.getBoard,\n    div: document.querySelector(\".board1\"),\n    att: gameBoard1.receiveAttack,\n    hp: gameBoard1.getHp\n  }];\n  var activePlayer = players[0];\n  var switchPlayerTurn = function switchPlayerTurn() {\n    activePlayer = activePlayer === players[0] ? players[1] : players[0];\n  };\n  var getActivePlayer = function getActivePlayer() {\n    return activePlayer;\n  };\n  var playRound = function playRound(x, y) {\n    var result = activePlayer.att(x, y);\n    return result;\n  };\n  return {\n    playRound: playRound,\n    getActivePlayer: getActivePlayer,\n    switchPlayerTurn: switchPlayerTurn\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/gameController.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/scripts/DOM.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.png */ \"./src/github.png\");\n\n\n\n// Initial Render\n\ndocument.querySelector(\"img\").src = _github_png__WEBPACK_IMPORTED_MODULE_2__;\n(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.init)();\nvar resetButton = document.querySelector(\".reset\");\nresetButton.addEventListener(\"click\", function () {\n  var board1 = document.querySelector(\".board1\");\n  var board2 = document.querySelector(\".board2\");\n  var dialog = document.querySelector(\"dialog\");\n  var gameOver = document.querySelector(\".over\");\n  board1.innerHTML = \"\";\n  board2.innerHTML = \"\";\n  dialog.close();\n  gameOver.innerHTML = \"\";\n\n  // Re-initialize the game state and render the initial UI\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.init)();\n});\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Ship = /*#__PURE__*/function () {\n  function Ship(hp) {\n    _classCallCheck(this, Ship);\n    this.hp = hp;\n  }\n  return _createClass(Ship, [{\n    key: \"hit\",\n    value: function hit() {\n      this.hp--;\n    }\n  }, {\n    key: \"isSunk\",\n    value: function isSunk() {\n      return this.hp === 0;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --header-height: 50px;\n  --footer-height: 70px;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  background: linear-gradient(\n    to bottom,\n    hsl(200, 70%, 50%),\n    hsl(200, 70%, 80%)\n  );\n}\nheader {\n  height: var(--header-height);\n  font-size: 40px;\n  margin-top: 40px;\n}\nheader > h1 {\n  color: hsl(200, 100%, 20%);\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", Arial;\n}\n.board1,\n.board2 {\n  height: 500px;\n  width: 500px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% - var(--footer-height) - var(--header-height));\n  width: auto;\n  gap: 100px;\n}\n\nbutton {\n  cursor: crosshair;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n.unchecked {\n  background-color: hsl(207, 72%, 80%);\n  border: 1px solid hsl(207, 72%, 40%);\n}\n.unchecked:hover {\n  background-color: hsl(207, 72%, 60%);\n}\nfooter {\n  height: var(--footer-height);\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\nimg {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border-radius: 50%;\n}\n\nimg:hover {\n  transform: scale(1.1);\n}\n\n.container > h1 {\n  font-weight: bold;\n  color: hsl(200, 100%, 20%);\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n}\n\nfooter {\n  color: hsl(200, 100%, 20%);\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n  font-weight: bold;\n}\ndialog {\n  border: 1px solid hsl(200, 100%, 20%);\n  position: fixed;\n  inset: 50%;\n  height: 180px;\n  background-color: hsl(207, 72%, 80%);\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  width: 230px;\n}\n#dialogContainer > button {\n  border: 1px solid hsl(200, 100%, 30%);\n  color: white;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 15px;\n  background-color: hsl(207, 72%, 70%);\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#dialogContainer > button:hover {\n  background-color: hsl(207, 72%, 50%);\n}\n\n#dialogContainer > h1 {\n  color: hsl(200, 100%, 20%);\n  font-size: 25px !important;\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n  font-size: 20px;\n  text-align: center;\n}\n#dialogContainer {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3524c849ab38de4be923.png\";\n\n//# sourceURL=webpack://battleship/./src/github.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;