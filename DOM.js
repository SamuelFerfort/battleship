import GameBoard from "./gameBoard";

function ScreenController() {
  const gameBoard = GameBoard();
  const board = gameBoard.getBoard();
  const boardDiv = document.querySelector(".board");
  const boardDiv2 = document.querySelector(".board2");

  const updateScreen = () => {
    board.forEach((row, x) => {
      row.forEach((cell, y) => {
        const cellBtn = document.createElement("button");
        cellBtn.classList.add("cell");
        cellBtn.dataset.cell = `${x}-${y}`;

        if (!cell.isHit) {
          cellBtn.style.backgroundColor = "white";
        } else if (cell.isHit && cell.ship) {
          cellBtn.style.textContent = "X";
        } else {
          cellBtn.style.backgroundColor = "purple";
        }
        boardDiv.appendChild(cellBtn);
      });
    });
  };

  
}
