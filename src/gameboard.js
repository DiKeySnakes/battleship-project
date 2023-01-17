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
      // console.log(battlefield);
      // console.log(battlefield[5].id);
      return battlefield;
    },

    placeShip(length, coords) {
      const newShip = Ship(length, coords);
      fleet.push(newShip);
      // console.log(fleet);

      const cells = coords;
      cells.forEach((element) => {
        battlefield[element].isFree = false;
        battlefield[element].shipId = newShip.id;
      });
      // console.log("after ships:", battlefield);
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
        console.log("targetShip:", targetShip);
        console.log("isSunk:", targetShip.isSunk());
        console.log("fleet:", fleet);
        console.log(battlefield);
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

const newGame = Gameboard();
newGame.createGameboard();
newGame.placeShip(3, [25, 26, 27]);
newGame.receiveAttack(25);
newGame.receiveAttack(26);
newGame.receiveAttack(27);
console.log(newGame.receiveAttack(21));
console.log(newGame.receiveAttack(22));
newGame.placeShip(2, [45, 46]);
console.log(newGame.isGameOver());
