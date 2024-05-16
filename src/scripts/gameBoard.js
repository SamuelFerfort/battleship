import Ship from "./ship";

export default function GameBoard() {
  const rows = 10;
  const columns = 10;
  const board = [];
  const cell = {
    isHit: false,
    hasShip: false,
    ship: null,
  };
  let hp = 17;
  const AircraftCarrier = new Ship(5);
  const Battleship = new Ship(4);
  const Cruiser = new Ship(3);
  const Submarine = new Ship(3);
  const Destroyer = new Ship(2);

  const createBoard = () => {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push({ ...cell });
      }
    }
  };

 
  const placeShip = (ship, startX, startY, orientation) => {
    for (let i = 0; i < ship.hp; i++) {
      if (orientation === "vertical") {
        board[startX + i][startY].hasShip = true;
        board[startX + i][startY].ship = ship;
      } else {
        board[startX][startY + i].hasShip = true;
        board[startX][startY + i].ship = ship;
      }
    }
  };
  const getHp = () => hp;
  const getBoard = () => board;

  const placeShipsRandomly = () => {
    const ships = [AircraftCarrier, Battleship, Cruiser, Submarine, Destroyer];

    ships.forEach((ship) => {
      let isPlaced = false;
      while (!isPlaced) {
        const startX = Math.floor(Math.random() * columns);
        const startY = Math.floor(Math.random() * rows);
        const orientation = Math.random() < 0.5 ? "horizontal" : "vertical";
        
        // Check if the ship can be placed at the generated coordinates
        if (canPlaceShip(ship, startX, startY, orientation)) {
          placeShip(ship, startX, startY, orientation);
          isPlaced = true;
        }
      }
    });
  };
  const canPlaceShip = (ship, startX, startY, orientation) => {
    if (orientation === "vertical") {
      if (startX + ship.hp > rows) return false;

      for (let i = 0; i < ship.hp; i++) {
        if (board[startX + i][startY].hasShip) return false;
        if (hasAdjacentShip(board, startX + i, startY)) return false;
      }
    } else {
      if (startY + ship.hp > rows) return false;

      for (let i = 0; i < ship.hp; i++) {
        if (board[startX][startY + i].hasShip) return false;
        if (hasAdjacentShip(board, startX, startY + i)) return false;
      }
    }
    return true;
  };
  createBoard();

  placeShipsRandomly();

  const receiveAttack = (x, y) => {
    if (board[x][y].isHit === true) return false;
    board[x][y].isHit = true;
    if (board[x][y].hasShip) {
      board[x][y].ship.hit();
      hp--;
      console.log(hp)
      if (hp === 0) return "over";
      return "hit";
     
    }

    return "switch";
  };

  return {
    receiveAttack,
    getBoard,
    getHp,
  };
}

function hasAdjacentShip(board, x, y) {
  const rows = board.length;
  const cols = board[0].length;
  // Check left adjacent cell
  if (y > 0 && board[x][y - 1].hasShip) {
    return true;
  }

  // Check right adjacent cell
  if (y < cols - 1 && board[x][y + 1].hasShip) {
    return true;
  }

  // Check top adjacent cell
  if (x > 0 && board[x - 1][y].hasShip) {
    return true;
  }

  // Check bottom adjacent cell
  if (x < rows - 1 && board[x + 1][y].hasShip) {
    return true;
  }

  // Check top-left diagonal cell
  if (x > 0 && y > 0 && board[x - 1][y - 1].hasShip) {
    return true;
  }

  // Check top-right diagonal cell
  if (x > 0 && y < cols - 1 && board[x - 1][y + 1].hasShip) {
    return true;
  }

  // Check bottom-left diagonal cell
  if (x < rows - 1 && y > 0 && board[x + 1][y - 1].hasShip) {
    return true;
  }

  // Check bottom-right diagonal cell
  if (x < rows - 1 && y < cols - 1 && board[x + 1][y + 1].hasShip) {
    return true;
  }

  return false;
}
