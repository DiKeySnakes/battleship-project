const Game = require("./game");
const Ai = require("./ai");
const audioOgg = require("./sounds/audio.ogg");

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
    for (let i = 0; i < computerFleet.length; i++) {
      playerComputer.gameboard.placeShip(
        computerFleet[i][0],
        computerFleet[i][1]
      );
    }
  }

  buildFleet();

  const muteButton = document.getElementById("mute");
  const startGameModal = document.getElementById("startGameModal");
  const endGameModal = document.getElementById("endGameModal");
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const newGameButton = document.querySelector("[data-reload-button]");
  const shipMessage = document.getElementById("ship");
  const lengthMessage = document.getElementById("length");
  const directionMessage = document.getElementById("direction");
  const winnerMessage = document.getElementById("winner");
  const playerHitsMessage = document.getElementById("playerHits");
  const computerHitsMessage = document.getElementById("computerHits");
  const playerMissedShotsMessage = document.getElementById("playerMissedShots");
  const computerMissedShotsMessage = document.getElementById(
    "computerMissedShots"
  );
  const overlay = document.getElementById("overlay");
  const placeShipsContainer = document.getElementById("player-place-ships");
  const rotateButton = document.querySelector("[data-rotate-button]");
  let direction = 0;
  const shipList = [
    ["Carrier", 5],
    ["Battleship", 4],
    ["Destroyer", 3],
    ["Submarine", 3],
    ["Patrol boat", 2],
  ];

  function changeDirection() {
    if (direction === 0) {
      direction = 1;
      directionMessage.textContent = "Direction: Vertical";
      return direction;
    }
    direction = 0;
    directionMessage.textContent = "Direction: Horizontal";
    return direction;
  }

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  rotateButton.addEventListener("click", () => {
    changeDirection();
  });

  newGameButton.addEventListener("click", () => {
    window.location.reload();
  });

  const audio = new Audio(audioOgg);

  muteButton.addEventListener("click", () => {
    audio.pause();
  });

  const playerHuman = initializedGame.Human;

  const playerComputerBattlefield = playerComputer.gameboard.getBattlefield();
  const playerHumanBattlefield = playerHuman.gameboard.getBattlefield();

  return {
    playerComputer,
    playerHuman,

    /* eslint-disable */
    createGrid() {
      const shipNameQueue = [];
      const shipLengthQueue = [];

      shipList.forEach((el) => {
        shipNameQueue.push(el[0]);
      });
      shipList.forEach((el) => {
        shipLengthQueue.push(el[1]);
      });

      let shipLength = shipLengthQueue.shift();
      let shipName = shipNameQueue.shift();

      let directionName = "Horizontal";
      if (direction === 1) {
        directionName = "Vertical";
      } else {
        directionName = "Horizontal";
      }

      shipMessage.textContent = `Place your ${shipName}`;
      lengthMessage.textContent = `Ship length: ${shipLength} cells`;
      directionMessage.textContent = `Direction: ${directionName}`;

      const humanFleet = playerHuman.gameboard.getFleet();

      const a = 10;
      const b = 10;
      placeShipsContainer.style.setProperty("--grid-rows", a);
      placeShipsContainer.style.setProperty("--grid-cols", b);
      for (let c = 0; c < playerComputerBattlefield.length; c++) {
        const cell = document.createElement("div");
        cell.dataset.id = `psc${c}`;
        if (!playerHumanBattlefield[c].isFree) {
          cell.dataset.isFree = "occupied";
        }
        if (playerHumanBattlefield[c].isHit) {
          cell.dataset.isHit = "hit";
        }
        if (playerHumanBattlefield[c].shipId) {
          cell.dataset.shipId = "ship";
        }
        placeShipsContainer.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", () => {
          const start = c;
          if (this.checkCoordIsValid(start, shipLength)) {
            cell.dataset.valid = true;
          } else {
            cell.dataset.valid = false;
          }
        });
        cell.addEventListener("click", () => {
          const start = c;
          const coords = this.createCoords(start, shipLength);
          if (coords !== undefined) {
            playerHuman.gameboard.placeShip(shipLength, coords);
            this.updatePlaceShipContainer();
            this.updateHumanBoard();
            shipName = shipNameQueue.shift();
            shipLength = shipLengthQueue.shift();
          }

          if (direction === 1) {
            directionName = "Vertical";
          } else {
            directionName = "Horizontal";
          }

          shipMessage.textContent = `Place your ${shipName}`;
          lengthMessage.textContent = `Ship length: ${shipLength} cells`;
          directionMessage.textContent = `Direction: ${directionName}`;

          if (humanFleet.length === 5) {
            closeModal(startGameModal);
            this.playAudio();
          }
        });
      }
    },
    /* eslint-enable */

    checkCoordIsValid(start, shipLength) {
      if (ai.isFit(direction, start, shipLength)) {
        return true;
      }
      return false;
    },

    createCoords(start, shipLength) {
      let coords;
      if (this.checkCoordIsValid(start, shipLength)) {
        coords = ai.createShipCoords(direction, start, shipLength);
      }
      return coords;
    },

    updatePlaceShipContainer() {
      for (let c = 0; c < playerHumanBattlefield.length; c++) {
        const cell = document.querySelector(`[data-id="psc${c}"]`);
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

    announceShipCreation() {
      openModal(startGameModal);
    },

    playAudio() {
      audio.play();
      audio.volume = 0.2;
    },

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
            playerHuman.turn = false;
            this.endGame();
          }
          if (playerHuman.turn && !cell1.dataset.isHit) {
            playerComputer.gameboard.receiveAttack(cell1.dataset.id);
            cell1.dataset.isHit = "hit";
            const computerSunkFleet = playerComputer.gameboard.getSunkFleet();
            if (computerSunkFleet.includes(c)) {
              cell1.dataset.sunk = "true";
            }
            playerHuman.turn = false;
            playerComputer.turn = true;
            if (
              playerHuman.gameboard.isGameOver() ||
              playerComputer.gameboard.isGameOver()
            ) {
              playerHuman.turn = false;
              this.endGame();
            }
          }
          if (playerComputer.turn) {
            this.attack();
            this.updateHumanBoard();
            this.updateComputerBoard();
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

    endGame() {
      openModal(endGameModal);
      const playerHits = playerHuman.gameboard.getHitCounter();
      const playerMissedShots = playerHuman.gameboard.getMissedShotCounter();
      const computerHits = playerComputer.gameboard.getHitCounter();
      const computerMissedShots =
        playerComputer.gameboard.getMissedShotCounter();
      if (playerHuman.gameboard.isGameOver()) {
        winnerMessage.textContent = "Computer wins";
      } else {
        winnerMessage.textContent = "Player wins";
      }
      playerHitsMessage.textContent = `Computer hits: ${playerHits}`;
      playerMissedShotsMessage.textContent = `Computer missed shots: ${playerMissedShots}`;
      computerHitsMessage.textContent = `Player hits: ${computerHits}`;
      computerMissedShotsMessage.textContent = `Player missed shots: ${computerMissedShots}`;
    },

    randomCoord() {
      const coord = Math.floor(Math.random() * 100);
      return coord;
    },

    randomAttack() {
      let randomCell = this.randomCoord();
      if (!randomArr.includes(randomCell)) {
        randomArr.push(randomCell);
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
        } else {
          prevSuccess = false;
        }
      } else {
        randomCell = this.randomCoord();
        this.randomAttack();
      }
    },

    targetAttack() {
      const coord = targetQueue.shift();
      randomArr.push(coord);
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
      } else {
        prevSuccess = false;
      }
    },

    attack() {
      if (prevSuccess || targetQueue.length !== 0) {
        this.targetAttack();
      } else {
        this.randomAttack();
      }
    },

    updateHumanBoard() {
      for (let c = 0; c < playerHumanBattlefield.length; c++) {
        const cell = document.querySelector(`[data-id="p${c}"]`);
        const playerSunkFleet = playerHuman.gameboard.getSunkFleet();
        if (!playerHumanBattlefield[c].isFree) {
          cell.dataset.isFree = "occupied";
        }
        if (playerHumanBattlefield[c].isHit) {
          cell.dataset.isHit = "hit";
        }
        if (playerHumanBattlefield[c].shipId) {
          cell.dataset.shipId = "ship";
        }
        if (playerSunkFleet.includes(c)) {
          cell.dataset.sunk = "true";
        }
      }
    },

    updateComputerBoard() {
      for (let c = 0; c < playerComputerBattlefield.length; c++) {
        const cell = document.querySelector(`[data-id="${c}"]`);
        const computerSunkFleet = playerComputer.gameboard.getSunkFleet();
        if (!playerComputerBattlefield[c].isFree) {
          cell.dataset.isFree = "occupied";
        }
        if (playerComputerBattlefield[c].isHit) {
          cell.dataset.isHit = "hit";
        }
        if (playerComputerBattlefield[c].shipId) {
          cell.dataset.shipId = "ship";
        }
        if (computerSunkFleet.includes(c)) {
          cell.dataset.sunk = "true";
        }
      }
    },
  };
}

module.exports = Dom;
