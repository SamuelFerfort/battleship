import GameBoard from "./gameBoard";

export default function GameController(board1, board2) {
  const gameBoard1 = GameBoard();
  const gameBoard2 = GameBoard();

  const players = [
    {
      player: "Player 1",
      board: gameBoard2.getBoard,
      div: board2,
      att: gameBoard2.receiveAttack,
      hp: gameBoard2.getHp,
    },
    {
      player: "Computer",
      board: gameBoard1.getBoard,
      div: board1,
      att: gameBoard1.receiveAttack,
      hp: gameBoard1.getHp,
    },
  ];
  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;

  const playRound = (x, y) => {
    const result = activePlayer.att(x, y);
    return result;
  };
  const playComputerRound = (state, boardSize = 10) => {
    let result = false;
    const { previousMoves, hits, targets, orientation, initialHit } = state;

    const directions = {
      horizontal: [
        [0, -1], // Left
        [0, 1], // Right
      ],
      vertical: [
        [-1, 0], // Up
        [1, 0], // Down
      ],
      all: [
        [-1, 0], // Up
        [1, 0], // Down
        [0, -1], // Left
        [0, 1], // Right
      ],
    };

    // Function to get random coordinates
    const getRandomCoordinates = () => {
      let x, y;
      do {
        x = Math.floor(Math.random() * boardSize);
        y = Math.floor(Math.random() * boardSize);
      } while (previousMoves.has(`${x}-${y}`));
      return [x, y];
    };

    // Function to get valid adjacent coordinates
    const getAdjacentCoordinates = (x, y, direction) => {
      return directions[direction]
        .map(([dx, dy]) => [x + dx, y + dy])
        .filter(
          ([nx, ny]) =>
            nx >= 0 &&
            ny >= 0 &&
            nx < boardSize &&
            ny < boardSize &&
            !previousMoves.has(`${nx}-${ny}`)
        );
    };

    // Main logic for the computer's move
    while (!result || result === "hit" || result === "sunk") {
      let x, y;

      if (targets.length > 0) {
        // Use the next target cell
        [x, y] = targets.shift();
      } else if (hits.length > 0) {
        // Determine the initial hit for targeting based on orientation
        const initial = initialHit || hits[0];
        let direction = "all";

        if (orientation) {
          direction = orientation;
        } else if (hits.length > 1) {
          // Determine orientation based on the first two hits
          const firstHit = hits[0];
          const secondHit = hits[1];
          if (firstHit.x === secondHit.x) {
            state.orientation = "horizontal";
          } else if (firstHit.y === secondHit.y) {
            state.orientation = "vertical";
          }
          state.initialHit = firstHit;
          direction = state.orientation || "all";
        }

        // Get valid adjacent coordinates based on the initial hit and orientation
        const adjCoordinates = getAdjacentCoordinates(
          initial.x,
          initial.y,
          direction
        );

        if (adjCoordinates.length > 0) {
          [x, y] = adjCoordinates.shift();
          targets.push(...adjCoordinates); // Add remaining adj coordinates to targets
        } else {
          // If no adjacent cells to target, fallback to hunt mode
          [x, y] = getRandomCoordinates();
        }
      } else {
        // Hunt mode: random move
        [x, y] = getRandomCoordinates();
      }

      previousMoves.add(`${x}-${y}`);
      result = playRound(x, y);

      if (result === "hit") {
        hits.push({ x, y });
        // Add new adjacent coordinates to targets based on the determined direction
        const newTargets = getAdjacentCoordinates(
          x,
          y,
          state.orientation || "all"
        );
        targets.push(...newTargets);
      } else if (result === "sunk") {
        // Clear targets and hits if a ship is sunk, reset orientation
        hits.length = 0;
        targets.length = 0;
        state.orientation = null;
        state.initialHit = null;
      }

      if (result === "over") {
        return result;
      }
    }

    return result;
  };

  return {
    playRound,
    getActivePlayer,
    switchPlayerTurn,
    playComputerRound,
  };
}
