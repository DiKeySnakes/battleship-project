const Game = require("./game");

function Dom() {
  const playerContainer = document.querySelector("#player-battlefield");
  const computerContainer = document.querySelector("#computer-battlefield");

  const newGame = Game();
  const initializedGame = newGame.initNewGame();
  const playerComputer = initializedGame.Computer;
  playerComputer.gameboard.placeShip(3, [25, 26, 27]);
  console.log(playerComputer.gameboard.getBattlefield());
  playerComputer.gameboard.placeShip(5, [95, 96, 97, 98, 99]);
  const playerHuman = initializedGame.Human;
  playerHuman.gameboard.placeShip(2, [55, 65]);
  playerHuman.gameboard.placeShip(3, [1, 2, 3]);
  console.log(playerHuman.gameboard.getBattlefield());
  playerHuman.gameboard.placeShip(3, [22, 23, 24]);
  console.log(playerHuman.gameboard.getBattlefield());
  playerHuman.gameboard.placeShip(5, [50, 60, 70, 80, 90]);
  playerComputer.gameboard.placeShip(4, [12, 22, 32, 42]);
  playerHuman.gameboard.placeShip(4, [19, 29, 39, 49]);
  playerComputer.gameboard.placeShip(3, [67, 68, 69]);
  playerComputer.gameboard.placeShip(2, [60, 70]);
  const playerComputerBattlefield = playerComputer.gameboard.getBattlefield();
  const playerHumanBattlefield = playerHuman.gameboard.getBattlefield();

  return {
    renderBoards() {
      const a = 10;
      const b = 10;
      playerContainer.style.setProperty("--grid-rows", a);
      playerContainer.style.setProperty("--grid-cols", b);
      computerContainer.style.setProperty("--grid-rows", a);
      computerContainer.style.setProperty("--grid-cols", b);
      for (let c = 0; c < playerComputerBattlefield.length; c++) {
        const cell1 = document.createElement("div");
        cell1.dataset.id = `c${c}`;
        if (!playerComputerBattlefield[c].isFree) {
          cell1.dataset.isFree = "occupied";
        }
        if (playerComputerBattlefield[c].isHit) {
          cell1.dataset.isHit = "hit";
        }
        if (playerComputerBattlefield[c].shipId) {
          cell1.dataset.shipId = "ship";
        }
        computerContainer.appendChild(cell1).className = "grid-item";
      }
      for (let c = 0; c < playerHumanBattlefield.length; c++) {
        const cell2 = document.createElement("div");
        cell2.dataset.id = `p${c}`;
        if (!playerHumanBattlefield[c].isFree) {
          cell2.dataset.isFree = "occupied";
        }
        if (playerHumanBattlefield[c].isHit) {
          cell2.dataset.isHit = "hit";
        }
        if (playerHumanBattlefield[c].shipId) {
          cell2.dataset.shipId = "ship";
        }
        playerContainer.appendChild(cell2).className = "grid-item";
      }
    },
  };
}

module.exports = Dom;
