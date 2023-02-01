const Player = require("./player");

function Game() {
  const newPlayer = Player();
  return {
    initNewGame() {
      const Computer = newPlayer.createPlayer("Computer");
      const Human = newPlayer.createPlayer("Human");
      const computerBattlefield = Computer.gameboard.getBattlefield();
      const humanBattlefield = Human.gameboard.getBattlefield();
      return { computerBattlefield, humanBattlefield, Computer, Human };
    },
  };
}

module.exports = Game;
