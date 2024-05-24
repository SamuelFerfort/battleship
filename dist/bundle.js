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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameController */ \"./src/scripts/gameController.js\");\n\nlet control;\nfunction ScreenController() {\n  const board1 = document.querySelector(\".board1\");\n  const board2 = document.querySelector(\".board2\");\n  control = (0,_gameController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(board1, board2);\n  const dialog = document.querySelector(\"dialog\");\n  const gameOver = document.querySelector(\".over\");\n  const updateScreen = activePlayer => {\n    activePlayer.div.innerHTML = \"\";\n    activePlayer.board().forEach((row, x) => {\n      row.forEach((cell, y) => {\n        const cellBtn = document.createElement(\"button\");\n        cellBtn.classList.add(\"cell\");\n        cellBtn.dataset.cell = `${x}-${y}`;\n        if (!cell.isHit) {\n          cellBtn.classList.add(\"unchecked\");\n          if (activePlayer.player === \"Player 1\") {\n            cellBtn.classList.add(\"hover\");\n          }\n        } else if (cell.isHit) {\n          cellBtn.classList.add(\"missed\");\n        }\n        if (activePlayer.player === \"Computer\" && cell.hasShip) {\n          cellBtn.classList.add(\"ship\");\n          cellBtn.classList.remove(\"unchecked\");\n        }\n        if (cell.isHit && cell.ship) {\n          if (cell.ship.isSunk()) {\n            cellBtn.classList.remove(\"unchecked\");\n            cellBtn.classList.add(\"sunk\");\n            cellBtn.innerHTML = \"✕\";\n          } else {\n            cellBtn.classList.add(\"hit\");\n          }\n        }\n        activePlayer.div.appendChild(cellBtn);\n      });\n    });\n  };\n  const computerState = {\n    previousMoves: new Set(),\n    hits: [],\n    targets: [],\n    orientation: null,\n    initialHit: null\n  };\n  const clickHandler = e => {\n    const currentPlayer = control.getActivePlayer();\n    let x, y;\n    const target = e.target.dataset.cell;\n    [x, y] = target.split(\"-\");\n    let result = control.playRound(x, y);\n    updateScreen(currentPlayer);\n    if (!result) return;\n    if (result === \"over\") {\n      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;\n      dialog.show();\n      board2.removeEventListener(\"click\", clickHandler);\n      return;\n    }\n    if (result === \"hit\" || result === \"sunk\") return false;\n    control.switchPlayerTurn();\n    let computerResult = control.playComputerRound(computerState);\n    updateScreen(control.getActivePlayer());\n    if (computerResult === \"over\") {\n      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;\n      dialog.show();\n      board2.removeEventListener(\"click\", clickHandler);\n      return;\n    }\n    control.switchPlayerTurn();\n  };\n  board2.addEventListener(\"click\", clickHandler);\n\n  // initial render\n  updateScreen(control.getActivePlayer());\n  control.switchPlayerTurn();\n  updateScreen(control.getActivePlayer());\n  control.switchPlayerTurn();\n}\nfunction init() {\n  ScreenController();\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/DOM.js?");

/***/ }),

/***/ "./src/scripts/gameBoard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\nfunction GameBoard() {\n  const rows = 10;\n  const columns = 10;\n  const board = [];\n  const cell = {\n    isHit: false,\n    hasShip: false,\n    ship: null\n  };\n  let hp = 17;\n  const AircraftCarrier = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](5);\n  const Battleship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](4);\n  const Cruiser = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n  const Submarine = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3);\n  const Destroyer = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](2);\n  const createBoard = () => {\n    for (let i = 0; i < rows; i++) {\n      board[i] = [];\n      for (let j = 0; j < columns; j++) {\n        board[i].push({\n          ...cell\n        });\n      }\n    }\n  };\n  const placeShip = (ship, startX, startY, orientation) => {\n    for (let i = 0; i < ship.hp; i++) {\n      if (orientation === \"vertical\") {\n        board[startX + i][startY].hasShip = true;\n        board[startX + i][startY].ship = ship;\n      } else {\n        board[startX][startY + i].hasShip = true;\n        board[startX][startY + i].ship = ship;\n      }\n    }\n  };\n  const getHp = () => hp;\n  const getBoard = () => board;\n  const placeShipsRandomly = () => {\n    const ships = [AircraftCarrier, Battleship, Cruiser, Submarine, Destroyer];\n    ships.forEach(ship => {\n      let isPlaced = false;\n      while (!isPlaced) {\n        const startX = Math.floor(Math.random() * columns);\n        const startY = Math.floor(Math.random() * rows);\n        const orientation = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\n\n        // Check if the ship can be placed at the generated coordinates\n        if (canPlaceShip(ship, startX, startY, orientation)) {\n          placeShip(ship, startX, startY, orientation);\n          isPlaced = true;\n        }\n      }\n    });\n  };\n  const canPlaceShip = (ship, startX, startY, orientation) => {\n    if (orientation === \"vertical\") {\n      if (startX + ship.hp > rows) return false;\n      for (let i = 0; i < ship.hp; i++) {\n        if (board[startX + i][startY].hasShip) return false;\n        if (hasAdjacentShip(board, startX + i, startY)) return false;\n      }\n    } else {\n      if (startY + ship.hp > rows) return false;\n      for (let i = 0; i < ship.hp; i++) {\n        if (board[startX][startY + i].hasShip) return false;\n        if (hasAdjacentShip(board, startX, startY + i)) return false;\n      }\n    }\n    return true;\n  };\n  createBoard();\n  placeShipsRandomly();\n  const receiveAttack = (x, y) => {\n    if (board[x][y].isHit === true) return false;\n    board[x][y].isHit = true;\n    if (board[x][y].hasShip) {\n      board[x][y].ship.hit();\n      hp--;\n      if (hp === 0) return \"over\";\n      if (board[x][y].ship.isSunk()) return \"sunk\";\n      return \"hit\";\n    }\n    return \"switch\";\n  };\n  return {\n    receiveAttack,\n    getBoard,\n    getHp\n  };\n}\nfunction hasAdjacentShip(board, x, y) {\n  const rows = board.length;\n  const cols = board[0].length;\n  // Check left adjacent cell\n  if (y > 0 && board[x][y - 1].hasShip) {\n    return true;\n  }\n\n  // Check right adjacent cell\n  if (y < cols - 1 && board[x][y + 1].hasShip) {\n    return true;\n  }\n\n  // Check top adjacent cell\n  if (x > 0 && board[x - 1][y].hasShip) {\n    return true;\n  }\n\n  // Check bottom adjacent cell\n  if (x < rows - 1 && board[x + 1][y].hasShip) {\n    return true;\n  }\n\n  // Check top-left diagonal cell\n  if (x > 0 && y > 0 && board[x - 1][y - 1].hasShip) {\n    return true;\n  }\n\n  // Check top-right diagonal cell\n  if (x > 0 && y < cols - 1 && board[x - 1][y + 1].hasShip) {\n    return true;\n  }\n\n  // Check bottom-left diagonal cell\n  if (x < rows - 1 && y > 0 && board[x + 1][y - 1].hasShip) {\n    return true;\n  }\n\n  // Check bottom-right diagonal cell\n  if (x < rows - 1 && y < cols - 1 && board[x + 1][y + 1].hasShip) {\n    return true;\n  }\n  return false;\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/gameBoard.js?");

/***/ }),

/***/ "./src/scripts/gameController.js":
/*!***************************************!*\
  !*** ./src/scripts/gameController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/scripts/gameBoard.js\");\n\nfunction GameController(board1, board2) {\n  const gameBoard1 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const gameBoard2 = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const players = [{\n    player: \"Player 1\",\n    board: gameBoard2.getBoard,\n    div: board2,\n    att: gameBoard2.receiveAttack,\n    hp: gameBoard2.getHp\n  }, {\n    player: \"Computer\",\n    board: gameBoard1.getBoard,\n    div: board1,\n    att: gameBoard1.receiveAttack,\n    hp: gameBoard1.getHp\n  }];\n  let activePlayer = players[0];\n  const switchPlayerTurn = () => {\n    activePlayer = activePlayer === players[0] ? players[1] : players[0];\n  };\n  const getActivePlayer = () => activePlayer;\n  const playRound = (x, y) => {\n    const result = activePlayer.att(x, y);\n    return result;\n  };\n  const playComputerRound = (state, boardSize = 10) => {\n    let result = false;\n    const {\n      previousMoves,\n      hits,\n      targets,\n      orientation,\n      initialHit\n    } = state;\n    const directions = {\n      horizontal: [[0, -1],\n      // Left\n      [0, 1] // Right\n      ],\n      vertical: [[-1, 0],\n      // Up\n      [1, 0] // Down\n      ],\n      all: [[-1, 0],\n      // Up\n      [1, 0],\n      // Down\n      [0, -1],\n      // Left\n      [0, 1] // Right\n      ]\n    };\n\n    // Function to get random coordinates\n    const getRandomCoordinates = () => {\n      let x, y;\n      do {\n        x = Math.floor(Math.random() * boardSize);\n        y = Math.floor(Math.random() * boardSize);\n      } while (previousMoves.has(`${x}-${y}`));\n      return [x, y];\n    };\n\n    // Function to get valid adjacent coordinates\n    const getAdjacentCoordinates = (x, y, direction) => {\n      return directions[direction].map(([dx, dy]) => [x + dx, y + dy]).filter(([nx, ny]) => nx >= 0 && ny >= 0 && nx < boardSize && ny < boardSize && !previousMoves.has(`${nx}-${ny}`));\n    };\n\n    // Main logic for the computer's move\n    while (!result || result === \"hit\" || result === \"sunk\") {\n      let x, y;\n      if (targets.length > 0) {\n        // Use the next target cell\n        [x, y] = targets.shift();\n      } else if (hits.length > 0) {\n        // Determine the initial hit for targeting based on orientation\n        const initial = initialHit || hits[0];\n        let direction = \"all\";\n        if (orientation) {\n          direction = orientation;\n        } else if (hits.length > 1) {\n          // Determine orientation based on the first two hits\n          const firstHit = hits[0];\n          const secondHit = hits[1];\n          if (firstHit.x === secondHit.x) {\n            state.orientation = \"vertical\";\n          } else if (firstHit.y === secondHit.y) {\n            state.orientation = \"horizontal\";\n          }\n          state.initialHit = firstHit;\n          direction = state.orientation || \"all\";\n        }\n\n        // Get valid adjacent coordinates based on the initial hit and orientation\n        const adjCoordinates = getAdjacentCoordinates(initial.x, initial.y, direction);\n        if (adjCoordinates.length > 0) {\n          [x, y] = adjCoordinates.shift();\n          targets.push(...adjCoordinates); // Add remaining adj coordinates to targets\n        } else {\n          // If no adjacent cells to target, fallback to hunt mode\n          [x, y] = getRandomCoordinates();\n        }\n      } else {\n        // Hunt mode: random move\n        [x, y] = getRandomCoordinates();\n      }\n      previousMoves.add(`${x}-${y}`);\n      result = playRound(x, y);\n      if (result === \"hit\") {\n        hits.push({\n          x,\n          y\n        });\n        // Add new adjacent coordinates to targets based on the determined direction\n        const newTargets = getAdjacentCoordinates(x, y, state.orientation || \"all\");\n        targets.push(...newTargets);\n      } else if (result === \"sunk\") {\n        // Clear targets and hits if a ship is sunk, reset orientation\n        hits.length = 0;\n        targets.length = 0;\n        state.orientation = null;\n        state.initialHit = null;\n      }\n      if (result === \"over\") {\n        return result;\n      }\n    }\n    return result;\n  };\n\n  // Initialize the state object outside the function\n  const computerState = {\n    previousMoves: new Set(),\n    hits: [],\n    targets: [],\n    orientation: null,\n    initialHit: null\n  };\n  return {\n    playRound,\n    getActivePlayer,\n    switchPlayerTurn,\n    playComputerRound\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/gameController.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/scripts/DOM.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _battleship_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../battleship.png */ \"./src/battleship.png\");\n\n\n\n// Initial Render\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst resetButton = document.querySelector(\".reset\");\nresetButton.addEventListener(\"click\", () => {\n  const board1 = document.querySelector(\".board1\");\n  const board2 = document.querySelector(\".board2\");\n  const dialog = document.querySelector(\"dialog\");\n  const gameOver = document.querySelector(\".over\");\n  board1.innerHTML = \"\";\n  board2.innerHTML = \"\";\n  dialog.close();\n  gameOver.innerHTML = \"\";\n\n  // Re-initialize the game state and render the initial UI\n  (0,_DOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(hp) {\n    this.hp = hp;\n  }\n  hit() {\n    this.hp--;\n  }\n  isSunk() {\n    return this.hp === 0;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! battleship.png */ \"./src/battleship.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Orbitron);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --header-height: 3rem;\n  --footer-height: 4rem;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  background-position: center;\n}\nheader {\n  height: var(--header-height);\n  font-size: 2rem;\n}\nheader > h1 {\n  color: hsl(200, 100%, 40%);\n  color: white;\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n  font-weight: bold;\n  margin-top: 5px;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Orbitron\";\n}\n.board1,\n.board2 {\n  height: 450px;\n  width: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% - var(--footer-height) - var(--header-height));\n  width: auto;\n  gap: 25rem;\n}\n\nbutton {\n  cursor: crosshair;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1.1rem;\n}\n.unchecked {\n  background-color: rgba(36, 137, 219, 0.3);\n  border: 1px solid hsl(207, 72%, 70%) !important;\n}\n\n.unchecked:hover {\n  background-color: hsl(207, 72%, 70%);\n}\n.hover:hover {\n  background-color: hsl(207, 72%, 60%);\n}\nfooter {\n  height: var(--footer-height);\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding-top: 15px;\n  color: white;\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n  font-weight: bold;\n\n}\n\nimg {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border-radius: 50%;\n}\n\nimg:hover {\n  transform: scale(1.1);\n}\n\n.container > h1 {\n  font-weight: bold;\n \n  color: white;\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n  font-size: 2.2rem;\n}\n\n\ndialog {\n  border: 1px solid hsl(200, 100%, 20%);\n  position: fixed;\n  inset: 50%;\n  height: 180px;\n  background-color: rgba(167, 208, 241, 0.6);\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  width: 230px;\n}\n#dialogContainer > button {\n  border: 1px solid hsl(200, 100%, 30%);\n  color: white;\n  border-radius: 16px;\n  padding: 8px 12px;\n  font-size: 1rem;\n  background-color: hsl(207, 72%, 50%);\n  font-weight: bold;\n  cursor: pointer;\n}\n.cell {\n  border: 1px solid hsl(207, 72%, 50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#dialogContainer > button:hover {\n  background-color: hsl(207, 72%, 60%);\n}\n\n#dialogContainer > h1 {\n  color: hsl(200, 100%, 20%);\n  font-size: 25px !important;\n  text-shadow: 0 1px 0 hsl(200, 100%, 30%);\n  font-size: 1.2rem;\n  text-align: center;\n}\n#dialogContainer {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 1.3rem;\n}\n\n@media (max-width: 1152px) {\n  .board1,\n  .board2 {\n    width: 60vw;\n    height: 30vh;\n  }\n  main {\n    flex-direction: column;\n    gap: 20px;\n  }\n  header {\n    height: var(--header-height);\n    font-size: 1.2rem;\n    margin-top: 1rem;\n  }\n  .container > h1 {\n    font-size: 1.5rem;\n  }\n  footer {\n    font-size: 0.7rem;\n  }\n  img {\n    height: 30px;\n    width: 30px;\n  }\n  .sunk {\n    font-size: 1rem !important;\n    line-height: 0px !important;\n  }\n}\n\n.sunk {\n  background: linear-gradient(\n    to bottom right,\n    rgba(255, 0, 0, 0.1),\n    rgba(255, 0, 0, 0.3)\n  ) !important;\n  border: 1px solid red;\n  font-size: 2rem;\n  color: red;\n  font-weight: bold;\n  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);\n  font-family: Arial, Helvetica, sans-serif\n}\n.ship {\n  background-color: rgba(51, 51, 51, 0.8);\n  border: 1px solid hsl(0, 0%, 25%);\n}\n\n.hit {\n  border: 1px solid hsl(0, 100%, 80%);\n  background-color: rgba(255, 51, 51, 0.8) !important;\n}\n.missed {\n  background-color: rgba(80, 160, 226, 0.8);\n}\n\na {\n  color: white;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/battleship.png":
/*!****************************!*\
  !*** ./src/battleship.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0e27887fbd88554bd18.png\";\n\n//# sourceURL=webpack://battleship/./src/battleship.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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