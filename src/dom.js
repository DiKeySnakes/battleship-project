const Game = require("./game");
const Ai = require("./ai");

function Dom() {
  const ai = Ai();
  let prevSuccess = false;
  const targetQueue = [];
  const randomArr = [];
  const playerContainer = document.querySelector("#player-battlefield");
  const computerContainer = document.querySelector("#computer-battlefield");

  const newGame = Game();
  const initializedGame = newGame.initNewGame();
  const playerComputer = initializedGame.Computer;

  function buildFleet() {
    ai.createRandomFleet();
    const computerFleet = ai.randomFleet;
    console.log(computerFleet);
    for (let i = 0; i < computerFleet.length; i++) {
      playerComputer.gameboard.placeShip(
        computerFleet[i][0],
        computerFleet[i][1]
      );
    }
  }

  buildFleet();

  // function placeDestroyer() {
  //   playerComputer.gameboard.placeShip(3, [25, 26, 27]);
  // }
  // placeDestroyer();
  // function placeCarrier() {
  //   playerComputer.gameboard.placeShip(5, [95, 96, 97, 98, 99]);
  // }
  // placeCarrier();
  // function placeBattleship() {
  //   playerComputer.gameboard.placeShip(4, [12, 22, 32, 42]);
  // }
  // placeBattleship();
  // function placeSubmarine() {
  //   playerComputer.gameboard.placeShip(3, [67, 68, 69]);
  // }
  // placeSubmarine();
  // function placePatrolBoat() {
  //   playerComputer.gameboard.placeShip(2, [60, 70]);
  // }
  // placePatrolBoat();

  const playerHuman = initializedGame.Human;
  playerHuman.gameboard.placeShip(2, [55, 65]);
  playerHuman.gameboard.placeShip(3, [1, 2, 3]);
  playerHuman.gameboard.placeShip(3, [22, 23, 24]);
  playerHuman.gameboard.placeShip(5, [50, 60, 70, 80, 90]);
  playerHuman.gameboard.placeShip(4, [19, 29, 39, 49]);

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
            playerHuman.turn = false;
            playerComputer.turn = true;
          }
          if (playerComputer.turn) {
            this.attack();
            this.updateHumanBoard();
            playerComputer.turn = false;
            playerHuman.turn = true;
          }
        });
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

    randomCoord() {
      const coord = Math.floor(Math.random() * 100);
      return coord;
    },

    randomAttack() {
      console.log("random attack!!!");
      let randomCell = this.randomCoord();
      if (!randomArr.includes(randomCell)) {
        randomArr.push(randomCell);
        console.log(randomArr);
        if (playerHuman.gameboard.receiveAttack(randomCell)) {
          prevSuccess = true;
          if (!randomArr.includes(randomCell + 1) && randomCell + 1 < 100) {
            targetQueue.push(randomCell + 1);
          }
          if (!randomArr.includes(randomCell - 1) && randomCell - 1 >= 0) {
            targetQueue.push(randomCell - 1);
          }
          if (!randomArr.includes(randomCell + 10) && randomCell + 10 < 100) {
            targetQueue.push(randomCell + 10);
          }
          if (!randomArr.includes(randomCell - 10) && randomCell - 10 >= 0) {
            targetQueue.push(randomCell - 10);
          }
          console.log(prevSuccess, targetQueue);
        } else {
          prevSuccess = false;
        }
        console.log("randomCell", randomCell);
        console.log("computer hits:", playerHuman.gameboard.getHitCounter());
        console.log(
          "computer missed shots:",
          playerHuman.gameboard.getMissedShotCounter()
        );
      } else {
        randomCell = this.randomCoord();
        this.randomAttack();
      }
    },

    targetAttack() {
      console.log("target attack!!!");
      const coord = targetQueue.shift();
      randomArr.push(coord);
      console.log("coord:", coord);
      if (playerHuman.gameboard.receiveAttack(coord)) {
        prevSuccess = true;
        if (!randomArr.includes(coord + 1) && coord + 1 < 100) {
          targetQueue.push(coord + 1);
        }
        if (!randomArr.includes(coord - 1) && coord - 1 >= 0) {
          targetQueue.push(coord - 1);
        }
        if (!randomArr.includes(coord + 10) && coord + 10 < 100) {
          targetQueue.push(coord + 10);
        }
        if (!randomArr.includes(coord - 10) && coord - 10 >= 0) {
          targetQueue.push(coord - 10);
        }
        console.log(prevSuccess, targetQueue);
      } else {
        prevSuccess = false;
      }
      console.log("computer hits:", playerHuman.gameboard.getHitCounter());
      console.log(
        "computer missed shots:",
        playerHuman.gameboard.getMissedShotCounter()
      );
    },

    attack() {
      if (prevSuccess || targetQueue.length !== 0) {
        this.targetAttack();
      } else {
        this.randomAttack();
      }
      console.log(prevSuccess, targetQueue);
    },

    updateHumanBoard() {
      for (let c = 0; c < playerHumanBattlefield.length; c++) {
        const cell = document.querySelector(`[data-id="p${c}"]`);
        if (!playerHumanBattlefield[c].isFree) {
          cell.dataset.isFree = "occupied";
        }
        if (playerHumanBattlefield[c].isHit) {
          cell.dataset.isHit = "hit";
        }
        if (playerHumanBattlefield[c].shipId) {
          cell.dataset.shipId = "ship";
        }
      }
    },
  };
}

module.exports = Dom;
