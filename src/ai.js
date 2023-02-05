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

    createCarrier() {
      const data = this.createRandomShipCoords(5);
      const carrier = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, carrier)) {
        return this.createCarrier();
      }
      return [carrier, direction];
    },

    createBattleship() {
      const data = this.createRandomShipCoords(4);
      const battleship = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, battleship)) {
        return this.createBattleship();
      }
      return [battleship, direction];
    },

    createCruiser() {
      const data = this.createRandomShipCoords(3);
      const cruiser = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, cruiser)) {
        return this.createCruiser();
      }
      return [cruiser, direction];
    },

    createSubmarine() {
      const data = this.createRandomShipCoords(3);
      const submarine = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, submarine)) {
        return this.createSubmarine();
      }
      return [submarine, direction];
    },

    createDestroyer() {
      const data = this.createRandomShipCoords(2);
      const destroyer = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, destroyer)) {
        return this.createDestroyer();
      }
      return [destroyer, direction];
    },

    createPatrolBoat1() {
      const data = this.createRandomShipCoords(1);
      const patrolBoat1 = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, patrolBoat1)) {
        return this.createPatrolBoat1();
      }
      return [patrolBoat1, direction];
    },

    createPatrolBoat2() {
      const data = this.createRandomShipCoords(1);
      const patrolBoat2 = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, patrolBoat2)) {
        return this.createPatrolBoat2();
      }
      return [patrolBoat2, direction];
    },

    createPatrolBoat3() {
      const data = this.createRandomShipCoords(1);
      const patrolBoat3 = data[0];
      const direction = data[1];
      if (this.isCrossing(randomFleetCoords, patrolBoat3)) {
        return this.createPatrolBoat3();
      }
      return [patrolBoat3, direction];
    },

    createRandomFleet() {
      const carrier = this.createCarrier();
      randomFleet.push([5, carrier[0], carrier[1]]);
      carrier[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const battleship = this.createBattleship();
      randomFleet.push([4, battleship[0], battleship[1]]);
      battleship[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const cruiser = this.createCruiser();
      randomFleet.push([3, cruiser[0], cruiser[1]]);
      cruiser[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const submarine = this.createSubmarine();
      randomFleet.push([3, submarine[0], submarine[1]]);
      submarine[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const destroyer = this.createDestroyer();
      randomFleet.push([2, destroyer[0], destroyer[1]]);
      destroyer[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const patrolBoat1 = this.createPatrolBoat1();
      randomFleet.push([1, patrolBoat1[0], patrolBoat1[1]]);
      patrolBoat1[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const patrolBoat2 = this.createPatrolBoat2();
      randomFleet.push([1, patrolBoat2[0], patrolBoat2[1]]);
      patrolBoat2[0].forEach((el) => {
        randomFleetCoords.push(el);
      });

      const patrolBoat3 = this.createPatrolBoat3();
      randomFleet.push([1, patrolBoat3[0], patrolBoat3[1]]);
      patrolBoat3[0].forEach((el) => {
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
        return [coords, axis];
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
