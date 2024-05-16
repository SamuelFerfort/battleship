import { init, reset } from "./DOM";
import styles from "../styles.css";
import icon from "../github.png";
// Initial Render
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", reset);

init();

const img = document.querySelector("img");
img.src = icon;
