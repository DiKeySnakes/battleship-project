const Ship = require("./ship");

function Gameboard() {
  let hitCounter = 0;
  let missedShotCounter = 0;
  const fleet = [];
  const battlefield = [];
  return {
    createCell(id) {
      return {
        id: id,
        isFree: true,
        isHit: false,
        shipId: null,
      };
    },

    createGameboard() {
      for (let i = 0; i < 100; i++) {
        battlefield.push(this.createCell(i));
      }
      return battlefield;
    },

    placeShip(length, coords) {
      const newShip = Ship(length, coords);
      fleet.push(newShip);

      const cells = coords;
      cells.forEach((element) => {
        battlefield[element].isFree = false;
        battlefield[element].shipId = newShip.id;
      });
      return battlefield;
    },

    getBattlefield() {
      return battlefield;
    },

    getFleet() {
      return fleet;
    },

    getHitCounter() {
      return hitCounter;
    },

    getMissedShotCounter() {
      return missedShotCounter;
    },

    receiveAttack(coord) {
      const attack = coord;
      if (
        battlefield[attack].isHit === false &&
        battlefield[attack].isFree === false
      ) {
        const targetShip = fleet.find(
          (ship) => ship.id === battlefield[attack].shipId
        );
        targetShip.hit(attack);
        battlefield[attack].isHit = true;
        hitCounter++;
        return true;
      }
      battlefield[attack].isHit = true;
      missedShotCounter++;
      return false;
    },

    isGameOver() {
      let counter = 0;
      for (let i = 0; i < fleet.length; i++) {
        if (fleet[i].isSunk() === true) {
          counter++;
        }
      }
      if (counter === fleet.length) {
        return true;
      }
      return false;
    },

    getSunkFleet() {
      const sunkFleetCoords = [];
      for (let i = 0; i < fleet.length; i++) {
        if (fleet[i].isSunk() === true) {
          fleet[i].coords.forEach((coord) => {
            sunkFleetCoords.push(coord);
          });
        }
      }
      return sunkFleetCoords;
    },
  };
}

module.exports = Gameboard;
