const Player = require("./player");
// const Gameboard = require("./gameboard");

function Game() {
  const newPlayer = Player();
  return {
    initNewGame() {
      const Computer = newPlayer.createPlayer("Computer");
      // console.log(Computer);
      const Human = newPlayer.createPlayer("Human");
      // console.log(Human);
      const computerBattlefield = Computer.gameboard.getBattlefield();
      // console.log(computerBattlefield);
      const humanBattlefield = Human.gameboard.getBattlefield();
      // console.log(humanBattlefield);
      return { computerBattlefield, humanBattlefield, Computer, Human };
    },
  };
}

const newGame = Game();
const initializedGame = newGame.initNewGame();
const playerComputer = initializedGame.Computer;
playerComputer.gameboard.placeShip(3, [25, 26, 27]);
// playerComputer.gameboard.placeShip(3, [1, 2, 3]);
// Computer.gameboard.placeShip(3, [25, 26, 27]);
// console.log(Game().getComputerBattlefield());
// console.log(Game().getHumanBattlefield());
console.log(playerComputer.gameboard.getBattlefield());
const playerHuman = initializedGame.Human;
playerHuman.gameboard.placeShip(3, [1, 2, 3]);
console.log(playerHuman.gameboard.getBattlefield());
playerHuman.gameboard.placeShip(3, [10, 11, 12]);
console.log(playerHuman.gameboard.getBattlefield());

module.exports = Game;
