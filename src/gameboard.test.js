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
