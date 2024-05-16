import GameController from "./gameController";
let control;
function ScreenController() {
  const board2 = document.querySelector(".board2");
  control = GameController();

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
          cellBtn.style.backgroundColor = "white";
        } else if (cell.isHit) {
          cellBtn.style.backgroundColor = "grey";
        }
        if (activePlayer.player === "Computer" && cell.hasShip) {
          cellBtn.style.backgroundColor = "purple";
        }
        if (cell.isHit && cell.ship) {
          cellBtn.style.backgroundColor = "red";
        }
        activePlayer.div.appendChild(cellBtn);
      });
    });
  };
  const playComputerRound = () => {
    let x, y;
    let result = false;
    while (result === "hit" || result === false) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      result = control.playRound(x, y);
      if (result === "over") return result;
    }
    return result;
  };
  const clickHandler = (e) => {
    const currentPlayer = control.getActivePlayer();

    let x, y;
    const target = e.target.dataset.cell;
    [x, y] = target.split("-");

    let result = control.playRound(x, y);
    updateScreen(currentPlayer);
    if (!result) return;
    console.log(result);
    if (result === "over") {
      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;

      dialog.show();
      return;
    }

    if (result === "hit") return false;

    control.switchPlayerTurn();

    // play computer move then switch move again
    let computerResult = playComputerRound();
    updateScreen(control.getActivePlayer());

    if (computerResult === "over") {
      // finish game
      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;

      dialog.show();
      return;
    }
    control.switchPlayerTurn();
  };

  board2.addEventListener("click", (e) => {
    clickHandler(e);
  });

  // initial render
  updateScreen(control.getActivePlayer());
  control.switchPlayerTurn();
  updateScreen(control.getActivePlayer());
  control.switchPlayerTurn();
}

export function init() {
  ScreenController();
}

// Reset the game state and UI
export function reset() {
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", () => {
    const board1 = document.querySelector(".board1");
    const board2 = document.querySelector(".board2");
    const dialog = document.querySelector("dialog");
    const gameOver = document.querySelector(".over");

    board1.innerHTML = "";
    board2.innerHTML = "";
    dialog.close();
    gameOver.innerHTML = "";

    // Re-initialize the game state and render the initial UI
    init();
  });
}
