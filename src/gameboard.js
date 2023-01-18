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
        console.log("hitCounter:", hitCounter);
        return true;
      }
      battlefield[attack].isHit = true;
      missedShotCounter++;
      console.log("missedShotCounter:", missedShotCounter);
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
  };
}

module.exports = Gameboard;
