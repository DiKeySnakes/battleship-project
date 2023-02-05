const uniqid = require("uniqid");

function Ship(length, coords, direction) {
  let hits = 0;
  return {
    id: uniqid.time(),
    length: length,
    coords: coords,
    direction: direction,
    start: coords[0],
    end: coords[coords.length - 1],

    hit(coord) {
      const a = Number(coord);
      if (coords.includes(a)) {
        hits++;
        return true;
      }
      return false;
    },

    isSunk() {
      if (hits === length) {
        return true;
      }
      return false;
    },
  };
}

module.exports = Ship;
