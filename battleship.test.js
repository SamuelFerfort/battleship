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
    // Hit the ship 10 times to sink it
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


