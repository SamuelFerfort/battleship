import init from "./DOM";
import "../styles.css";

init();

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

  init();
});
