(()=>{var e={171:(e,t,a)=>{const r=a(417);e.exports=function(){const e=document.querySelector("#player-battlefield"),t=document.querySelector("#computer-battlefield"),a=r().initNewGame(),o=a.Computer;o.gameboard.placeShip(3,[25,26,27]),console.log(o.gameboard.getBattlefield()),o.gameboard.placeShip(5,[95,96,97,98,99]);const i=a.Human;i.gameboard.placeShip(2,[55,65]),i.gameboard.placeShip(3,[1,2,3]),console.log(i.gameboard.getBattlefield()),i.gameboard.placeShip(3,[22,23,24]),console.log(i.gameboard.getBattlefield()),i.gameboard.placeShip(5,[50,60,70,80,90]),o.gameboard.placeShip(4,[12,22,32,42]),i.gameboard.placeShip(4,[19,29,39,49]),o.gameboard.placeShip(3,[67,68,69]),o.gameboard.placeShip(2,[60,70]);const l=o.gameboard.getBattlefield(),s=i.gameboard.getBattlefield();return{renderBoards(){e.style.setProperty("--grid-rows",10),e.style.setProperty("--grid-cols",10),t.style.setProperty("--grid-rows",10),t.style.setProperty("--grid-cols",10);for(let e=0;e<l.length;e++){const a=document.createElement("div");a.dataset.id=`c${e}`,l[e].isFree||(a.dataset.isFree="occupied"),l[e].isHit&&(a.dataset.isHit="hit"),l[e].shipId&&(a.dataset.shipId="ship"),t.appendChild(a).className="grid-item"}for(let t=0;t<s.length;t++){const a=document.createElement("div");a.dataset.id=`p${t}`,s[t].isFree||(a.dataset.isFree="occupied"),s[t].isHit&&(a.dataset.isHit="hit"),s[t].shipId&&(a.dataset.shipId="ship"),e.appendChild(a).className="grid-item"}}}}},417:(e,t,a)=>{const r=a(507);function o(){const e=r();return{initNewGame(){const t=e.createPlayer("Computer"),a=e.createPlayer("Human");return{computerBattlefield:t.gameboard.getBattlefield(),humanBattlefield:a.gameboard.getBattlefield(),Computer:t,Human:a}}}}const i=o().initNewGame(),l=i.Computer;l.gameboard.placeShip(3,[25,26,27]),console.log(l.gameboard.getBattlefield());const s=i.Human;s.gameboard.placeShip(3,[1,2,3]),console.log(s.gameboard.getBattlefield()),s.gameboard.placeShip(3,[10,11,12]),console.log(s.gameboard.getBattlefield()),e.exports=o},498:(e,t,a)=>{const r=a(643);e.exports=function(){let e=0,t=0;const a=[],o=[];return{createCell:e=>({id:e,isFree:!0,isHit:!1,shipId:null}),createGameboard(){for(let e=0;e<100;e++)o.push(this.createCell(e));return o},placeShip(e,t){const i=r(e,t);a.push(i);return t.forEach((e=>{o[e].isFree=!1,o[e].shipId=i.id})),o},getBattlefield:()=>o,getFleet:()=>a,getHitCounter:()=>e,getMissedShotCounter:()=>t,receiveAttack(r){const i=r;if(!1===o[i].isHit&&!1===o[i].isFree){return a.find((e=>e.id===o[i].shipId)).hit(i),o[i].isHit=!0,e++,!0}return o[i].isHit=!0,t++,!1},isGameOver(){let e=0;for(let t=0;t<a.length;t++)!0===a[t].isSunk()&&e++;return e===a.length}}}},507:(e,t,a)=>{const r=a(498);e.exports=function(){return{createPlayer(e){const t=r();return t.createGameboard(),{playerName:e,gameboard:t,turn:!1}},changeTurn:e=>e.turn?(e.turn=!1,e.turn):(e.turn=!0,e.turn),attack:(e,t)=>e.gameboard.receiveAttack(t),randomCoord:()=>[Math.floor(100*Math.random())]}}},643:e=>{e.exports=function(e,t){let a=0;return{id:Date.now(),length:e,coords:t,hit:e=>!!t.includes(e)&&(a++,!0),isSunk:()=>a===e}}}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports}(()=>{"use strict";a(171)().renderBoards()})()})();