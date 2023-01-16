function Ship(length, coords) {
  let hitCounter = 0;
  return {
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

export default Ship;
