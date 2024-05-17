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
          cellBtn.classList.add("unchecked");
          if (activePlayer.player === "Player 1") {
            cellBtn.classList.add("hover");
          }
        } else if (cell.isHit) {
          cellBtn.style.backgroundColor = "hsl(207, 72%, 60%)";
         
        }
        if (activePlayer.player === "Computer" && cell.hasShip) {
          cellBtn.style.backgroundColor = " hsl(0, 0%, 20%)";
          cellBtn.classList.add("ship")
          cellBtn.classList.remove("unchecked");
        }
        if (cell.isHit && cell.ship) {
          if (cell.ship.isSunk()) {
            cellBtn.classList.remove("unchecked");
            cellBtn.classList.add("sunk");
            cellBtn.innerHTML = "X"
          } else {
            cellBtn.style.backgroundColor = "hsl(0, 100%, 60%)"
            cellBtn.classList.add("hit");
          }
        }
        activePlayer.div.appendChild(cellBtn);
      });
    });
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

      result = control.playRound(x, y);
      previousHits[`${x}-${y}`] = { x, y };

      if (result === "hit") {
        // Update previous hits if it's a hit
        previousHits[`${x}-${y}`] = { x, y };
      }

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
    if (result === "over") {
      gameOver.innerHTML = `${control.getActivePlayer().player} Won!`;

      dialog.show();
      board2.removeEventListener("click", clickHandler);
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

export function init() {
  ScreenController();
}
