function Ai() {
  const randomFleet = [];
  const randomFleetCoords = [];

  return {
    randomFleet: randomFleet,

    randomCoord() {
      const coord = Math.floor(Math.random() * 100);
      return coord;
    },

    isCrossing(arr1, arr2) {
      let counter = 0;
      arr2.forEach((el) => {
        if (arr1.includes(el)) {
          counter++;
        }
      });
      if (counter === 0) {
        return false;
      }
      return true;
    },

    createBattleship() {
      const battleship = this.createRandomShipCoords(4);
      if (this.isCrossing(randomFleetCoords, battleship)) {
        return this.createBattleship();
      }
      return battleship;
    },

    createDestroyer() {
      const destroyer = this.createRandomShipCoords(3);
      if (this.isCrossing(randomFleetCoords, destroyer)) {
        return this.createDestroyer();
      }
      return destroyer;
    },

    createSubmarine() {
      const submarine = this.createRandomShipCoords(3);
      if (this.isCrossing(randomFleetCoords, submarine)) {
        return this.createSubmarine();
      }
      return submarine;
    },

    createPatrolBoat() {
      const patrolBoat = this.createRandomShipCoords(2);
      if (this.isCrossing(randomFleetCoords, patrolBoat)) {
        return this.createPatrolBoat();
      }
      return patrolBoat;
    },

    createRandomFleet() {
      const carrier = this.createRandomShipCoords(5);
      randomFleet.push([5, carrier]);
      carrier.forEach((el) => {
        randomFleetCoords.push(el);
      });

      const battleship = this.createBattleship();
      randomFleet.push([4, battleship]);
      battleship.forEach((el) => {
        randomFleetCoords.push(el);
      });

      const destroyer = this.createDestroyer();
      randomFleet.push([3, destroyer]);
      destroyer.forEach((el) => {
        randomFleetCoords.push(el);
      });

      const submarine = this.createSubmarine();
      randomFleet.push([3, submarine]);
      submarine.forEach((el) => {
        randomFleetCoords.push(el);
      });

      const patrolBoat = this.createPatrolBoat();
      randomFleet.push([2, patrolBoat]);
      patrolBoat.forEach((el) => {
        randomFleetCoords.push(el);
      });
    },

    // eslint-disable-next-line consistent-return
    createRandomShipCoords(length) {
      const coords = [];
      const axis = Math.round(Math.random());
      const startingPoint = this.randomCoord();
      if (this.isFit(axis, startingPoint, length)) {
        if (axis === 0) {
          for (let i = 0; i < length; i++) {
            coords.push(startingPoint + i);
          }
        } else {
          for (let i = 0; i < length; i++) {
            coords.push(startingPoint + i * 10);
          }
        }
        return coords;
      }
      return this.createRandomShipCoords(length);
    },

    createShipCoords(direction, startingPoint, length) {
      const coords = [];
      if (direction === 0) {
        for (let i = 0; i < length; i++) {
          coords.push(startingPoint + i);
        }
      } else {
        for (let i = 0; i < length; i++) {
          coords.push(startingPoint + i * 10);
        }
      }
      return coords;
    },

    createValidStartingPoint(length) {
      const axis = Math.round(Math.random());
      const startingPoint = this.randomCoord();
      if (!this.isFit(axis, startingPoint, length)) {
        return this.createValidStartingPoint(length);
      }
      return { axis, startingPoint, length };
    },

    isFit(axis, startingPoint, length) {
      const rowMax = Math.ceil((startingPoint + 1) / 10) * 10;
      const axisXControlAmount = startingPoint + (length - 1);
      const axisYControlAmount = startingPoint + (length - 1) * 10;
      if (axis === 1) {
        if (axisYControlAmount < 100) {
          return true;
        }
        return false;
      }
      if (axisXControlAmount < rowMax) {
        return true;
      }
      return false;
    },
  };
}

module.exports = Ai;
