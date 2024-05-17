import Ship from "./src/scripts/ship";
import GameBoard from "./src/scripts/gameBoard";
import GameController from "./src/scripts/gameController";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(10);
  });

  test("Ship is hit", () => {
    ship.hit();
    expect(ship.hp).toBe(9);
  });

  test("Ship is sunk", () => {
   
    for (let i = 0; i < 10; i++) {
      ship.hit();
    }
    expect(ship.isSunk()).toBe(true);
  });
});

describe("GameBoard", () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = GameBoard();
  });
  test("GameBoard should initialize with a valid board", () => {
    const gameBoard = new GameBoard();
    const board = gameBoard.getBoard();
    expect(board.length).toBe(10);
    expect(board.every((row) => row.length === 10)).toBe(true);
  });

  test("receiveAttack should return the updated HP after a successful attack", () => {
    gameBoard.getBoard()[0][0].hasShip = true;
    gameBoard.getBoard()[0][0].ship = new Ship(2);

    gameBoard.receiveAttack(0, 0);
    expect(gameBoard.getHp()).toBe(16);
  });
});

describe("GameController", () => {
  let gameController;

  beforeEach(() => {
    gameController = GameController();
  });

  test("should initialize with Player 1 as the active player", () => {
    const activePlayer = gameController.getActivePlayer();
    expect(activePlayer.player).toBe("Player 1");
  });

  test("should switch to the other player", () => {
    gameController.switchPlayerTurn();
    let activePlayer = gameController.getActivePlayer();
    expect(activePlayer.player).toBe("Computer");

    gameController.switchPlayerTurn();
    activePlayer = gameController.getActivePlayer();
    expect(activePlayer.player).toBe("Player 1");
  });

  test("should play a round and return the result", () => {
    const x = 0;
    const y = 0;
    const activePlayer = gameController.getActivePlayer();
    activePlayer.board()[x][y] = { hasShip: true, ship: new Ship(1) };
    const result = gameController.playRound(x, y);
    expect(result).toBe("hit");
  });

  test("should play a computer round and return the result", () => {
    const result = gameController.playComputerRound();
    expect(["hit", "switch", "over"]).toContain(result);
  });

  test("should play until the game is over", () => {
    const activePlayer = gameController.getActivePlayer();
    const board = activePlayer.board();

    let result;
    // Simulate hitting all ship positions
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j].hasShip) {
          result = gameController.playRound(i, j);
        }
      }
    }
    expect(result).toBe("over");
  });
});
