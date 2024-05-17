import GameController from "./gameController";
let control;
function ScreenController() {
  const board1 = document.querySelector(".board1");
  const board2 = document.querySelector(".board2");
  control = GameController(board1, board2);

  const dialog = document.querySelector("dialog");
  const gameOver = document.querySelector(".over");

  const updateScreen = (activePlayer) => {
    activePlayer.div.innerHTML = "";
    activePlayer.board().forEach((row, x) => {
      row.forEach((cell, y) => {
        const cellBtn = document.createElement("button");
        cellBtn.classList.add("cell");
        cellBtn.dataset.cell = `${x}-${y}`;

        if (!cell.isHit) {
          cellBtn.classList.add("unchecked");
          if (activePlayer.player === "Player 1") {
            cellBtn.classList.add("hover");
          }
        } else if (cell.isHit) {
          cellBtn.classList.add("missed");
        }
        if (activePlayer.player === "Computer" && cell.hasShip) {
          cellBtn.classList.add("ship");
          cellBtn.classList.remove("unchecked");
        }
        if (cell.isHit && cell.ship) {
          if (cell.ship.isSunk()) {
            cellBtn.classList.remove("unchecked");
            cellBtn.classList.add("sunk");
            cellBtn.innerHTML = "X";
          } else {
            cellBtn.classList.add("hit");
          }
        }
        activePlayer.div.appendChild(cellBtn);
      });
    });
  };

  const clickHandler = (e) => {
    const currentPlayer = control.getActivePlayer();
    let x, y;
    const target = e.target.dataset.cell;
    [x, y] = target.split("-");

    let result = control.playRound(x, y);
    updateScreen(currentPlayer);
    if (!result) return;
    if (result === "over") {
      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;

      dialog.show();
      board2.removeEventListener("click", clickHandler);
      return;
    }

    if (result === "hit") return false;

    control.switchPlayerTurn();

    let computerResult = control.playComputerRound();
    updateScreen(control.getActivePlayer());

    if (computerResult === "over") {
      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;

      dialog.show();
      board2.removeEventListener("click", clickHandler);

      return;
    }
    control.switchPlayerTurn();
  };

  board2.addEventListener("click", clickHandler);

  // initial render
  updateScreen(control.getActivePlayer());
  control.switchPlayerTurn();
  updateScreen(control.getActivePlayer());
  control.switchPlayerTurn();
}

export default function init() {
  ScreenController();
}
