import "./styles.css";

const playerContainer = document.querySelector("#player-battlefield");
const computerContainer = document.querySelector("#computer-battlefield");

function createGrid(rows, cols) {
  const a = rows;
  const b = cols;
  playerContainer.style.setProperty("--grid-rows", a);
  playerContainer.style.setProperty("--grid-cols", b);
  computerContainer.style.setProperty("--grid-rows", a);
  computerContainer.style.setProperty("--grid-cols", b);
  for (let c = 0; c < a * b; c++) {
    const cell1 = document.createElement("div");
    cell1.dataset.id = c;
    playerContainer.appendChild(cell1).className = "grid-item";
    const cell2 = document.createElement("div");
    cell2.dataset.id = c;
    computerContainer.appendChild(cell2).className = "grid-item";
  }
}

createGrid(10, 10);
