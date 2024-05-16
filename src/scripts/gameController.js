import GameBoard from "./gameBoard";

export default function GameController() {
  const gameBoard1 = GameBoard();
  const gameBoard2 = GameBoard();
  
  const players = [
    {
      player: "Player 1",
      board: gameBoard2.getBoard,
      div: document.querySelector(".board2"),
      att: gameBoard2.receiveAttack,
      hp: gameBoard2.getHp,
    },
    {
      player: "Computer",
      board: gameBoard1.getBoard,
      div: document.querySelector(".board1"),
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
    return result
  };

  return {
    playRound,
    getActivePlayer,
    switchPlayerTurn,
  };
}

