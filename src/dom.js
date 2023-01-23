const Game = require("./game");

function Dom() {
  const playerContainer = document.querySelector("#player-battlefield");
  const computerContainer = document.querySelector("#computer-battlefield");

  const newGame = Game();
  const initializedGame = newGame.initNewGame();
  const playerComputer = initializedGame.Computer;
  function placeDestroyer() {
    playerComputer.gameboard.placeShip(3, [25, 26, 27]);
  }
  placeDestroyer();
  function placeCarrier() {
    playerComputer.gameboard.placeShip(5, [95, 96, 97, 98, 99]);
  }
  placeCarrier();
  const playerHuman = initializedGame.Human;
  playerHuman.gameboard.placeShip(2, [55, 65]);
  playerHuman.gameboard.placeShip(3, [1, 2, 3]);
  playerHuman.gameboard.placeShip(3, [22, 23, 24]);
  playerHuman.gameboard.placeShip(5, [50, 60, 70, 80, 90]);
  function placeBattleship() {
    playerComputer.gameboard.placeShip(4, [12, 22, 32, 42]);
  }
  placeBattleship();
  playerHuman.gameboard.placeShip(4, [19, 29, 39, 49]);
  function placeSubmarine() {
    playerComputer.gameboard.placeShip(3, [67, 68, 69]);
  }
  placeSubmarine();
  function placePatrolBoat() {
    playerComputer.gameboard.placeShip(2, [60, 70]);
  }
  placePatrolBoat();
  const playerComputerBattlefield = playerComputer.gameboard.getBattlefield();
  const playerHumanBattlefield = playerHuman.gameboard.getBattlefield();

  return {
    playerComputer,
    playerHuman,
    renderBoards() {
      const a = 10;
      const b = 10;
      playerContainer.style.setProperty("--grid-rows", a);
      playerContainer.style.setProperty("--grid-cols", b);
      computerContainer.style.setProperty("--grid-rows", a);
      computerContainer.style.setProperty("--grid-cols", b);
      for (let c = 0; c < playerComputerBattlefield.length; c++) {
        const cell1 = document.createElement("div");
        cell1.dataset.id = c;
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
        cell1.addEventListener("click", () => {
          if (
            playerHuman.gameboard.isGameOver() ||
            playerComputer.gameboard.isGameOver()
          ) {
            console.log("GAME OVER");
            playerHuman.turn = false;
          }
          if (playerHuman.turn) {
            playerComputer.gameboard.receiveAttack(cell1.dataset.id);
            cell1.dataset.isHit = "hit";
            console.log("hits:", playerComputer.gameboard.getHitCounter());
            console.log(
              "missed shots:",
              playerComputer.gameboard.getMissedShotCounter()
            );
          }
        });
      }
      for (let c = 0; c < playerHumanBattlefield.length; c++) {
        const cell2 = document.createElement("div");
        cell2.dataset.id = c;
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
