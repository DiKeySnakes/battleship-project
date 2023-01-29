import "./styles.css";

const Dom = require("./dom");

const newDom = Dom();

function render() {
  newDom.renderBoards();
}

newDom.createGrid();
newDom.announceShipCreation();

render();

newDom.playerHuman.turn = true;
