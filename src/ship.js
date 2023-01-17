function Ship(length, coords) {
  let hitCounter = 0;
  return {
    id: Date.now(),
    length: length,
    coords: coords,

    hit(coord) {
      if (coords.includes(coord)) {
        hitCounter++;
        return true;
      }
      return false;
    },

    isSunk() {
      if (hitCounter === length) {
        return true;
      }
      return false;
    },
  };
}

module.exports = Ship;
