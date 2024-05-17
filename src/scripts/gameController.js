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
  const playComputerRound = () => {
    let x, y;
    let result = false;
    let counter = 0;
    const previousHits = {};
    while (result === "hit" || result === false) {
      if (Object.keys(previousHits).length > 0 && counter < 10) {
        const lastHit = previousHits[Object.keys(previousHits)[0]];
        x = lastHit.x;
        y = lastHit.y;

        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ];
        const randomIndex = Math.floor(Math.random() * directions.length);
        const randomDirection = directions[randomIndex];

        x += randomDirection[0];
        y += randomDirection[1];

        x = Math.max(0, Math.min(x, 9));
        y = Math.max(0, Math.min(y, 9));
        counter++;
        if (previousHits[`${x}-${y}`]) {
          continue;
        }
      } else {
        // If no previous hits, fall back to random attack
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }

      result = playRound(x, y);
      previousHits[`${x}-${y}`] = { x, y };

      if (result === "hit") {
        // Update previous hits if it's a hit
        previousHits[`${x}-${y}`] = { x, y };
      }

      if (result === "over") return result;
    }
    return result;
  };
  return {
    playRound,
    getActivePlayer,
    switchPlayerTurn,
    playComputerRound
  };
}
