import "./styles.css";

const Dom = require("./dom");

const newDom = Dom();

function render() {
  newDom.renderBoards();
}

render();

newDom.playerHuman.turn = true;
