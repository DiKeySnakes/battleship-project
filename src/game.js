const Player = require("./player");
const Ship = require("./ship");

function Game() {
  const newPlayer = Player();
  const Computer = newPlayer.createPlayer("Computer");
  console.log(Computer);
  const battlefield = Ship();
  console.log(battlefield);
}

Game();
