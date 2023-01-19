const Gameboard = require("./gameboard");

function Player() {
  return {
    createPlayer(name) {
      const gameboard = Gameboard();
      gameboard.createGameboard();
      return {
        playerName: name,
        gameboard: gameboard,
        turn: false,
      };
    },

    changeTurn(playerName) {
      if (playerName.turn) {
        playerName.turn = false;
        return playerName.turn;
      }
      playerName.turn = true;
      return playerName.turn;
    },

    attack(playerName, coord) {
      return playerName.gameboard.receiveAttack(coord);
    },

    randomCoord() {
      const coord = Math.floor(Math.random() * 100);
      return [coord];
    },
  };
}

module.exports = Player;
