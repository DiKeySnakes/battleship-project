const Gameboard = require("./gameboard");
// const Ship = require("./ship");

test("check if gameboard cell is created", () => {
  const newGame = Gameboard();
  newGame.createCell(1);
  expect(newGame.createCell(1)).toStrictEqual({
    id: 1,
    isFree: true,
    isHit: false,
    shipId: null,
  });
});

test("check if gameboard is created", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  expect(newGame.getBattlefield()).toStrictEqual([
    { id: 0, isFree: true, isHit: false, shipId: null },
    { id: 1, isFree: true, isHit: false, shipId: null },
    { id: 2, isFree: true, isHit: false, shipId: null },
    { id: 3, isFree: true, isHit: false, shipId: null },
    { id: 4, isFree: true, isHit: false, shipId: null },
    { id: 5, isFree: true, isHit: false, shipId: null },
    { id: 6, isFree: true, isHit: false, shipId: null },
    { id: 7, isFree: true, isHit: false, shipId: null },
    { id: 8, isFree: true, isHit: false, shipId: null },
    { id: 9, isFree: true, isHit: false, shipId: null },
    { id: 10, isFree: true, isHit: false, shipId: null },
    { id: 11, isFree: true, isHit: false, shipId: null },
    { id: 12, isFree: true, isHit: false, shipId: null },
    { id: 13, isFree: true, isHit: false, shipId: null },
    { id: 14, isFree: true, isHit: false, shipId: null },
    { id: 15, isFree: true, isHit: false, shipId: null },
    { id: 16, isFree: true, isHit: false, shipId: null },
    { id: 17, isFree: true, isHit: false, shipId: null },
    { id: 18, isFree: true, isHit: false, shipId: null },
    { id: 19, isFree: true, isHit: false, shipId: null },
    { id: 20, isFree: true, isHit: false, shipId: null },
    { id: 21, isFree: true, isHit: false, shipId: null },
    { id: 22, isFree: true, isHit: false, shipId: null },
    { id: 23, isFree: true, isHit: false, shipId: null },
    { id: 24, isFree: true, isHit: false, shipId: null },
    { id: 25, isFree: true, isHit: false, shipId: null },
    { id: 26, isFree: true, isHit: false, shipId: null },
    { id: 27, isFree: true, isHit: false, shipId: null },
    { id: 28, isFree: true, isHit: false, shipId: null },
    { id: 29, isFree: true, isHit: false, shipId: null },
    { id: 30, isFree: true, isHit: false, shipId: null },
    { id: 31, isFree: true, isHit: false, shipId: null },
    { id: 32, isFree: true, isHit: false, shipId: null },
    { id: 33, isFree: true, isHit: false, shipId: null },
    { id: 34, isFree: true, isHit: false, shipId: null },
    { id: 35, isFree: true, isHit: false, shipId: null },
    { id: 36, isFree: true, isHit: false, shipId: null },
    { id: 37, isFree: true, isHit: false, shipId: null },
    { id: 38, isFree: true, isHit: false, shipId: null },
    { id: 39, isFree: true, isHit: false, shipId: null },
    { id: 40, isFree: true, isHit: false, shipId: null },
    { id: 41, isFree: true, isHit: false, shipId: null },
    { id: 42, isFree: true, isHit: false, shipId: null },
    { id: 43, isFree: true, isHit: false, shipId: null },
    { id: 44, isFree: true, isHit: false, shipId: null },
    { id: 45, isFree: true, isHit: false, shipId: null },
    { id: 46, isFree: true, isHit: false, shipId: null },
    { id: 47, isFree: true, isHit: false, shipId: null },
    { id: 48, isFree: true, isHit: false, shipId: null },
    { id: 49, isFree: true, isHit: false, shipId: null },
    { id: 50, isFree: true, isHit: false, shipId: null },
    { id: 51, isFree: true, isHit: false, shipId: null },
    { id: 52, isFree: true, isHit: false, shipId: null },
    { id: 53, isFree: true, isHit: false, shipId: null },
    { id: 54, isFree: true, isHit: false, shipId: null },
    { id: 55, isFree: true, isHit: false, shipId: null },
    { id: 56, isFree: true, isHit: false, shipId: null },
    { id: 57, isFree: true, isHit: false, shipId: null },
    { id: 58, isFree: true, isHit: false, shipId: null },
    { id: 59, isFree: true, isHit: false, shipId: null },
    { id: 60, isFree: true, isHit: false, shipId: null },
    { id: 61, isFree: true, isHit: false, shipId: null },
    { id: 62, isFree: true, isHit: false, shipId: null },
    { id: 63, isFree: true, isHit: false, shipId: null },
    { id: 64, isFree: true, isHit: false, shipId: null },
    { id: 65, isFree: true, isHit: false, shipId: null },
    { id: 66, isFree: true, isHit: false, shipId: null },
    { id: 67, isFree: true, isHit: false, shipId: null },
    { id: 68, isFree: true, isHit: false, shipId: null },
    { id: 69, isFree: true, isHit: false, shipId: null },
    { id: 70, isFree: true, isHit: false, shipId: null },
    { id: 71, isFree: true, isHit: false, shipId: null },
    { id: 72, isFree: true, isHit: false, shipId: null },
    { id: 73, isFree: true, isHit: false, shipId: null },
    { id: 74, isFree: true, isHit: false, shipId: null },
    { id: 75, isFree: true, isHit: false, shipId: null },
    { id: 76, isFree: true, isHit: false, shipId: null },
    { id: 77, isFree: true, isHit: false, shipId: null },
    { id: 78, isFree: true, isHit: false, shipId: null },
    { id: 79, isFree: true, isHit: false, shipId: null },
    { id: 80, isFree: true, isHit: false, shipId: null },
    { id: 81, isFree: true, isHit: false, shipId: null },
    { id: 82, isFree: true, isHit: false, shipId: null },
    { id: 83, isFree: true, isHit: false, shipId: null },
    { id: 84, isFree: true, isHit: false, shipId: null },
    { id: 85, isFree: true, isHit: false, shipId: null },
    { id: 86, isFree: true, isHit: false, shipId: null },
    { id: 87, isFree: true, isHit: false, shipId: null },
    { id: 88, isFree: true, isHit: false, shipId: null },
    { id: 89, isFree: true, isHit: false, shipId: null },
    { id: 90, isFree: true, isHit: false, shipId: null },
    { id: 91, isFree: true, isHit: false, shipId: null },
    { id: 92, isFree: true, isHit: false, shipId: null },
    { id: 93, isFree: true, isHit: false, shipId: null },
    { id: 94, isFree: true, isHit: false, shipId: null },
    { id: 95, isFree: true, isHit: false, shipId: null },
    { id: 96, isFree: true, isHit: false, shipId: null },
    { id: 97, isFree: true, isHit: false, shipId: null },
    { id: 98, isFree: true, isHit: false, shipId: null },
    { id: 99, isFree: true, isHit: false, shipId: null },
  ]);
});

test("check getHitCounter method", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  newGame.placeShip(3, [25, 26, 27]);
  newGame.receiveAttack(25);
  newGame.receiveAttack(22);
  expect(newGame.getHitCounter()).toBe(1);
});

test("check getMissedShotCounter method", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  newGame.placeShip(3, [25, 26, 27]);
  newGame.receiveAttack(25);
  newGame.receiveAttack(22);
  expect(newGame.getMissedShotCounter()).toBe(1);
});

test("check receiveAttack function hits", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  newGame.placeShip(3, [25, 26, 27]);
  expect(newGame.receiveAttack(25)).toBeTruthy();
});

test("check receiveAttack function misses", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  newGame.placeShip(3, [25, 26, 27]);
  expect(newGame.receiveAttack(21)).toBeFalsy();
});

test("check isGameOver function works properly (false)", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  newGame.placeShip(3, [25, 26, 27]);
  newGame.receiveAttack(25);
  expect(newGame.isGameOver()).toBeFalsy();
});

test("check isGameOver function works properly (true)", () => {
  const newGame = Gameboard();
  newGame.createGameboard();
  newGame.placeShip(3, [25, 26, 27]);
  newGame.receiveAttack(25);
  newGame.receiveAttack(26);
  newGame.receiveAttack(27);
  expect(newGame.isGameOver()).toBeTruthy();
});
