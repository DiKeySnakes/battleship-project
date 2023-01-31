(()=>{var e={778:e=>{e.exports=function(){const e=[],t=[];return{randomFleet:e,randomCoord:()=>Math.floor(100*Math.random()),isCrossing(e,t){let o=0;return t.forEach((t=>{e.includes(t)&&o++})),0===o?(console.log("false"),!1):(console.log("true"),!0)},createBattleship(){const e=this.createRandomShipCoords(4);return this.isCrossing(t,e)?this.createBattleship():(console.log(e),e)},createDestroyer(){const e=this.createRandomShipCoords(3);return this.isCrossing(t,e)?this.createDestroyer():(console.log(e),e)},createSubmarine(){const e=this.createRandomShipCoords(3);return this.isCrossing(t,e)?this.createSubmarine():(console.log(e),e)},createPatrolBoat(){const e=this.createRandomShipCoords(2);return this.isCrossing(t,e)?this.createPatrolBoat():(console.log(e),e)},createRandomFleet(){const o=this.createRandomShipCoords(5);e.push([5,o]),o.forEach((e=>{t.push(e)})),console.log("first ship:",t);const s=this.createBattleship();e.push([4,s]),s.forEach((e=>{t.push(e)})),console.log("Fleet",e),console.log("randomCoords:",t);const r=this.createDestroyer();e.push([3,r]),r.forEach((e=>{t.push(e)})),console.log("Fleet",e),console.log("randomCoords:",t);const a=this.createSubmarine();e.push([3,a]),a.forEach((e=>{t.push(e)})),console.log("Fleet",e),console.log("randomCoords:",t);const n=this.createPatrolBoat();e.push([2,n]),n.forEach((e=>{t.push(e)})),console.log("Fleet",e),console.log("randomCoords:",t)},createRandomShipCoords(e){const t=[],o=Math.round(Math.random()),s=this.randomCoord();if(this.isFit(o,s,e)){if(0===o)for(let o=0;o<e;o++)t.push(s+o);else for(let o=0;o<e;o++)t.push(s+10*o);return console.log(t),t}return this.createRandomShipCoords(e)},createShipCoords(e,t,o){const s=[];if(0===e)for(let e=0;e<o;e++)s.push(t+e);else for(let e=0;e<o;e++)s.push(t+10*e);return console.log(s),s},createValidStartingPoint(e){const t=Math.round(Math.random()),o=this.randomCoord();return this.isFit(t,o,e)?(console.log("valid:",t,o,e),{axis:t,startingPoint:o,length:e}):this.createValidStartingPoint(e)},isFit(e,t,o){const s=10*Math.ceil((t+1)/10);return 1===e?t+10*(o-1)<100:t+(o-1)<s}}}},171:(e,t,o)=>{const s=o(417),r=o(778);e.exports=function(){const e=r();let t=!1;const o=[],a=[],n=document.querySelector("#player-battlefield"),i=document.querySelector("#computer-battlefield"),l=s().initNewGame(),c=l.Computer;!function(){e.createRandomFleet();const t=e.randomFleet;console.log("computerFleet:",t);for(let e=0;e<t.length;e++)c.gameboard.placeShip(t[e][0],t[e][1])}();const d=document.getElementById("startGameModal"),u=document.getElementById("endGameModal"),h=document.querySelectorAll("[data-modal-target]"),m=document.querySelectorAll("[data-close-button]"),g=document.querySelector("[data-reload-button]"),p=document.getElementById("ship"),C=document.getElementById("length"),f=document.getElementById("direction"),S=document.getElementById("winner"),y=document.getElementById("playerHits"),b=document.getElementById("computerHits"),E=document.getElementById("playerMissedShots"),k=document.getElementById("computerMissedShots"),v=document.getElementById("overlay"),H=document.getElementById("player-place-ships"),F=document.querySelector("[data-rotate-button]");let B=0;const I=[["Carrier",5],["Battleship",4],["Destroyer",3],["Submarine",3],["Patrol boat",2]];function x(e){null!=e&&(e.classList.add("active"),v.classList.add("active"))}function M(e){null!=e&&(e.classList.remove("active"),v.classList.remove("active"))}h.forEach((e=>{e.addEventListener("click",(()=>{x(document.querySelector(e.dataset.modalTarget))}))})),v.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{M(e)}))})),m.forEach((e=>{e.addEventListener("click",(()=>{M(e.closest(".modal"))}))})),F.addEventListener("click",(()=>{console.log("Change direction!!!"),0===B?(B=1,f.textContent="Direction: Vertical"):(B=0,f.textContent="Direction: Horizontal"),console.log(B)})),g.addEventListener("click",(()=>{window.location.reload()}));const P=l.Human,G=c.gameboard.getBattlefield(),A=P.gameboard.getBattlefield();return{playerComputer:c,playerHuman:P,createGrid(){const e=[],t=[];I.forEach((t=>{e.push(t[0])})),I.forEach((e=>{t.push(e[1])})),console.log(e),console.log(t);let o=t.shift(),s=e.shift(),r="Horizontal";r=1===B?"Vertical":"Horizontal",p.textContent=`Place your ${s}`,C.textContent=`Ship length: ${o} cells`,f.textContent=`Direction: ${r}`;const a=P.gameboard.getFleet();console.log("humanFleet:",a);H.style.setProperty("--grid-rows",10),H.style.setProperty("--grid-cols",10);for(let n=0;n<G.length;n++){const i=document.createElement("div");i.dataset.id=`psc${n}`,A[n].isFree||(i.dataset.isFree="occupied"),A[n].isHit&&(i.dataset.isHit="hit"),A[n].shipId&&(i.dataset.shipId="ship"),H.appendChild(i).className="grid-item",i.addEventListener("mouseover",(()=>{const e=n;this.checkCoordIsValid(e,o)?(console.log(e),i.dataset.valid=!0):(console.log(e),i.dataset.valid=!1)})),i.addEventListener("click",(()=>{const i=n,l=this.createCoords(i,o);void 0!==l&&(P.gameboard.placeShip(o,l),this.updatePlaceShipContainer(),this.updateHumanBoard(),s=e.shift(),o=t.shift()),r=1===B?"Vertical":"Horizontal",p.textContent=`Place your ${s}`,C.textContent=`Ship length: ${o} cells`,f.textContent=`Direction: ${r}`,console.log(s),console.log(o),console.log("Human fleet length:",a.length),5===a.length&&M(d)}))}},checkCoordIsValid:(t,o)=>e.isFit(B,t,o)?(console.log("true"),!0):(console.log("false"),!1),createCoords(t,o){let s;return this.checkCoordIsValid(t,o)&&(s=e.createShipCoords(B,t,o)),s},updatePlaceShipContainer(){for(let e=0;e<A.length;e++){const t=document.querySelector(`[data-id="psc${e}"]`);A[e].isFree||(t.dataset.isFree="occupied"),A[e].isHit&&(t.dataset.isHit="hit"),A[e].shipId&&(t.dataset.shipId="ship")}},announceShipCreation(){x(d)},renderBoards(){n.style.setProperty("--grid-rows",10),n.style.setProperty("--grid-cols",10),i.style.setProperty("--grid-rows",10),i.style.setProperty("--grid-cols",10);for(let e=0;e<G.length;e++){const t=document.createElement("div");t.dataset.id=e,G[e].isFree||(t.dataset.isFree="occupied"),G[e].isHit&&(t.dataset.isHit="hit"),G[e].shipId&&(t.dataset.shipId="ship"),i.appendChild(t).className="grid-item",t.addEventListener("click",(()=>{if((P.gameboard.isGameOver()||c.gameboard.isGameOver())&&(console.log("GAME OVER"),P.turn=!1,this.endGame()),P.turn){c.gameboard.receiveAttack(t.dataset.id),t.dataset.isHit="hit",console.log("hits:",c.gameboard.getHitCounter()),console.log("missed shots:",c.gameboard.getMissedShotCounter());const o=c.gameboard.getSunkFleet();console.log("computerSunkFleet:",o),console.log("CCCCCCCC:",e),console.log("Sunk function:",o.includes(e)),o.includes(e)&&(t.dataset.sunk="true"),P.turn=!1,c.turn=!0,(P.gameboard.isGameOver()||c.gameboard.isGameOver())&&(console.log("GAME OVER"),P.turn=!1,this.endGame())}c.turn&&(this.attack(),this.updateHumanBoard(),this.updateComputerBoard(),c.turn=!1,P.turn=!0)}))}for(let e=0;e<A.length;e++){const t=document.createElement("div");t.dataset.id=`p${e}`,A[e].isFree||(t.dataset.isFree="occupied"),A[e].isHit&&(t.dataset.isHit="hit"),A[e].shipId&&(t.dataset.shipId="ship"),n.appendChild(t).className="grid-item"}},endGame(){x(u);const e=P.gameboard.getHitCounter(),t=P.gameboard.getMissedShotCounter(),o=c.gameboard.getHitCounter(),s=c.gameboard.getMissedShotCounter();P.gameboard.isGameOver()?S.textContent="Computer wins":S.textContent="Congratulations! Player wins",y.textContent=`Computer hits: ${e}`,E.textContent=`Computer missed shots: ${t}`,b.textContent=`Player hits: ${o}`,k.textContent=`Player missed shots: ${s}`},randomCoord:()=>Math.floor(100*Math.random()),randomAttack(){console.log("random attack!!!");let e=this.randomCoord();a.includes(e)?(e=this.randomCoord(),this.randomAttack()):(a.push(e),console.log(a),P.gameboard.receiveAttack(e)?(t=!0,!a.includes(e+1)&&e+1<100&&o.push(e+1),!a.includes(e-1)&&e-1>=0&&o.push(e-1),!a.includes(e+10)&&e+10<100&&o.push(e+10),!a.includes(e-10)&&e-10>=0&&o.push(e-10),console.log(t,o)):t=!1,console.log("randomCell",e),console.log("computer hits:",P.gameboard.getHitCounter()),console.log("computer missed shots:",P.gameboard.getMissedShotCounter()))},targetAttack(){console.log("target attack!!!");const e=o.shift();a.push(e),console.log("coord:",e),P.gameboard.receiveAttack(e)?(t=!0,!a.includes(e+1)&&e+1<100&&o.push(e+1),!a.includes(e-1)&&e-1>=0&&o.push(e-1),!a.includes(e+10)&&e+10<100&&o.push(e+10),!a.includes(e-10)&&e-10>=0&&o.push(e-10),console.log(t,o)):t=!1,console.log("computer hits:",P.gameboard.getHitCounter()),console.log("computer missed shots:",P.gameboard.getMissedShotCounter())},attack(){t||0!==o.length?this.targetAttack():this.randomAttack(),console.log(t,o)},updateHumanBoard(){for(let e=0;e<A.length;e++){const t=document.querySelector(`[data-id="p${e}"]`),o=P.gameboard.getSunkFleet();A[e].isFree||(t.dataset.isFree="occupied"),A[e].isHit&&(t.dataset.isHit="hit"),A[e].shipId&&(t.dataset.shipId="ship"),o.includes(e)&&(t.dataset.sunk="true")}console.log(P.gameboard.getSunkFleet())},updateComputerBoard(){for(let e=0;e<G.length;e++){const t=document.querySelector(`[data-id="${e}"]`),o=c.gameboard.getSunkFleet();G[e].isFree||(t.dataset.isFree="occupied"),G[e].isHit&&(t.dataset.isHit="hit"),G[e].shipId&&(t.dataset.shipId="ship"),o.includes(e)&&(t.dataset.sunk="true")}console.log(c.gameboard.getSunkFleet())}}}},417:(e,t,o)=>{const s=o(507);function r(){const e=s();return{initNewGame(){const t=e.createPlayer("Computer"),o=e.createPlayer("Human");return{computerBattlefield:t.gameboard.getBattlefield(),humanBattlefield:o.gameboard.getBattlefield(),Computer:t,Human:o}}}}const a=r().initNewGame();a.Computer.gameboard.placeShip(3,[25,26,27]);const n=a.Human;n.gameboard.placeShip(3,[1,2,3]),n.gameboard.placeShip(3,[10,11,12]),e.exports=r},498:(e,t,o)=>{const s=o(643);e.exports=function(){let e=0,t=0;const o=[],r=[];return{createCell:e=>({id:e,isFree:!0,isHit:!1,shipId:null}),createGameboard(){for(let e=0;e<100;e++)r.push(this.createCell(e));return r},placeShip(e,t){const a=s(e,t);o.push(a);return t.forEach((e=>{r[e].isFree=!1,r[e].shipId=a.id})),r},getBattlefield:()=>r,getFleet:()=>o,getHitCounter:()=>e,getMissedShotCounter:()=>t,receiveAttack(s){const a=s;if(!1===r[a].isHit&&!1===r[a].isFree){return o.find((e=>e.id===r[a].shipId)).hit(a),r[a].isHit=!0,e++,!0}return r[a].isHit=!0,t++,!1},isGameOver(){let e=0;for(let t=0;t<o.length;t++)!0===o[t].isSunk()&&(e++,console.log(o[t].coords));return e===o.length},getSunkFleet(){const e=[];for(let t=0;t<o.length;t++)!0===o[t].isSunk()&&o[t].coords.forEach((t=>{e.push(t)}));return e}}}},507:(e,t,o)=>{const s=o(498);e.exports=function(){return{createPlayer(e){const t=s();return t.createGameboard(),{playerName:e,gameboard:t,turn:!1}},changeTurn:e=>e.turn?(e.turn=!1,e.turn):(e.turn=!0,e.turn),attack:(e,t)=>e.gameboard.receiveAttack(t),randomCoord:()=>Math.floor(100*Math.random())}}},643:e=>{e.exports=function(e,t){let o=0;return{id:Date.now()+Math.floor(100*Math.random()),length:e,coords:t,hit(e){const s=Number(e);return!!t.includes(s)&&(o++,!0)},isSunk:()=>o===e}}}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,o),a.exports}(()=>{"use strict";const e=o(171)();e.createGrid(),e.announceShipCreation(),e.renderBoards(),e.playerHuman.turn=!0})()})();