const Player = require("./player");

test("check player turn", () => {
  const newPlayer = Player();
  const Computer = newPlayer.createPlayer("Computer");
  expect(Computer.turn).toBeFalsy();
});

test("check if player turn changes", () => {
  const newPlayer = Player();
  const Computer = newPlayer.createPlayer("Computer");
  newPlayer.changeTurn(Computer);
  expect(Computer.turn).toBeTruthy();
});

test("check attack function misses", () => {
  const newPlayer = Player();
  const Computer = newPlayer.createPlayer("Computer");
  expect(newPlayer.attack(Computer, 22)).toBeFalsy();
});

test("check attack function hits", () => {
  const newPlayer = Player();
  const Computer = newPlayer.createPlayer("Computer");
  Computer.gameboard.placeShip(3, [25, 26, 27]);
  expect(newPlayer.attack(Computer, 25)).toBeTruthy();
});
