function Ai() {
  // const carrier = {};
  // const battleship = {};
  // const destroyer = {};
  // const submarine = {};
  // const patrolBoat = {};
  // const randomFleet = [carrier, battleship, destroyer, submarine, patrolBoat];

  return {
    randomCoord() {
      const coord = Math.floor(Math.random() * 100);
      return coord;
    },

    createRandomShipCoords(length) {
      const coords = [];
      const valid = this.createValidStartingPoint(length);
      if (valid.axis === 0) {
        for (let i = 0; i < length; i++) {
          coords.push(valid.startingPoint + i);
        }
      } else {
        for (let i = 0; i < length; i++) {
          coords.push(valid.startingPoint + i * 10);
        }
      }
      console.log(coords);
      return coords;
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

    createValidStartingPoint(length) {
      const axis = Math.round(Math.random());
      const startingPoint = this.randomCoord();
      if (!this.isFit(axis, startingPoint, length)) {
        this.createValidStartingPoint(length);
      }
      return { axis, startingPoint, length };
    },
  };
}

Ai().createRandomShipCoords(5);

module.exports = Ai;
