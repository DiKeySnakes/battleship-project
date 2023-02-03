(()=>{var t={104:t=>{var e="undefined"!=typeof process&&process.pid?process.pid.toString(36):"";function r(){var t=Date.now(),e=r.last||t;return r.last=t>e?t:e+1}t.exports=t.exports.default=function(t,a){return(t||"")+""+e+r().toString(36)+(a||"")},t.exports.process=function(t,a){return(t||"")+e+r().toString(36)+(a||"")},t.exports.time=function(t,e){return(t||"")+r().toString(36)+(e||"")}},778:t=>{t.exports=function(){const t=[],e=[];return{randomFleet:t,randomCoord:()=>Math.floor(100*Math.random()),isCrossing(t,e){let r=0;return e.forEach((e=>{t.includes(e)&&r++})),0!==r},createBattleship(){const t=this.createRandomShipCoords(4);return this.isCrossing(e,t)?this.createBattleship():t},createCruiser(){const t=this.createRandomShipCoords(3);return this.isCrossing(e,t)?this.createCruiser():t},createSubmarine(){const t=this.createRandomShipCoords(3);return this.isCrossing(e,t)?this.createSubmarine():t},createDestroyer(){const t=this.createRandomShipCoords(2);return this.isCrossing(e,t)?this.createDestroyer():t},createPatrolBoat1(){const t=this.createRandomShipCoords(1);return this.isCrossing(e,t)?this.createPatrolBoat1():t},createPatrolBoat2(){const t=this.createRandomShipCoords(1);return this.isCrossing(e,t)?this.createPatrolBoat2():t},createPatrolBoat3(){const t=this.createRandomShipCoords(1);return this.isCrossing(e,t)?this.createPatrolBoat3():t},createRandomFleet(){const r=this.createRandomShipCoords(5);t.push([5,r]),r.forEach((t=>{e.push(t)}));const a=this.createBattleship();t.push([4,a]),a.forEach((t=>{e.push(t)}));const s=this.createCruiser();t.push([3,s]),s.forEach((t=>{e.push(t)}));const o=this.createSubmarine();t.push([3,o]),o.forEach((t=>{e.push(t)}));const i=this.createDestroyer();t.push([2,i]),i.forEach((t=>{e.push(t)}));const n=this.createPatrolBoat1();t.push([1,n]),n.forEach((t=>{e.push(t)}));const d=this.createPatrolBoat2();t.push([1,d]),d.forEach((t=>{e.push(t)}));const c=this.createPatrolBoat3();t.push([1,c]),c.forEach((t=>{e.push(t)}))},createRandomShipCoords(t){const e=[],r=Math.round(Math.random()),a=this.randomCoord();if(this.isFit(r,a,t)){if(0===r)for(let r=0;r<t;r++)e.push(a+r);else for(let r=0;r<t;r++)e.push(a+10*r);return e}return this.createRandomShipCoords(t)},createShipCoords(t,e,r){const a=[];if(0===t)for(let t=0;t<r;t++)a.push(e+t);else for(let t=0;t<r;t++)a.push(e+10*t);return a},createValidStartingPoint(t){const e=Math.round(Math.random()),r=this.randomCoord();return this.isFit(e,r,t)?{axis:e,startingPoint:r,length:t}:this.createValidStartingPoint(t)},isFit(t,e,r){const a=10*Math.ceil((e+1)/10);return 1===t?e+10*(r-1)<100:e+(r-1)<a}}}},171:(t,e,r)=>{const a=r(417),s=r(778),o=r(693);t.exports=function(){const t=s();let e=!1;const r=[],i=[],n=document.querySelector("#player-battlefield"),d=document.querySelector("#computer-battlefield"),c=a().initNewGame(),u=c.Computer;!function(){t.createRandomFleet();const e=t.randomFleet;for(let t=0;t<e.length;t++)u.gameboard.placeShip(e[t][0],e[t][1])}();const l=document.getElementById("mute"),h=document.getElementById("mute-icon"),p=document.getElementById("startGameModal"),m=document.getElementById("endGameModal"),g=document.querySelectorAll("[data-modal-target]"),f=document.querySelectorAll("[data-close-button]"),C=document.querySelector("[data-reload-button]"),y=document.getElementById("ship"),S=document.getElementById("length"),v=document.getElementById("direction"),b=document.getElementById("winner"),B=document.getElementById("playerHits"),E=document.getElementById("computerHits"),k=document.getElementById("playerMissedShots"),H=document.getElementById("computerMissedShots"),x=document.getElementById("overlay"),I=document.getElementById("player-place-ships"),P=document.querySelector("[data-rotate-button]");let F=0;const w=[["Carrier",5],["Battleship",4],["Cruiser",3],["Submarine",3],["Destroyer",2],["Patrol boat #1",1],["Patrol boat #2",1],["Patrol boat #3",1]];function $(t){null!=t&&(t.classList.add("active"),x.classList.add("active"))}function A(t){null!=t&&(t.classList.remove("active"),x.classList.remove("active"))}g.forEach((t=>{t.addEventListener("click",(()=>{$(document.querySelector(t.dataset.modalTarget))}))})),x.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((t=>{A(t)}))})),f.forEach((t=>{t.addEventListener("click",(()=>{A(t.closest(".modal"))}))})),P.addEventListener("click",(()=>{0===F?(F=1,v.textContent="Direction: Vertical"):(F=0,v.textContent="Direction: Horizontal")})),C.addEventListener("click",(()=>{window.location.reload()}));const M=new Audio(o);l.addEventListener("click",(()=>{"true"===l.dataset.paused?(M.play(),l.dataset.paused="false",h.classList.remove("fa-volume-xmark"),h.classList.add("fa-volume-high")):(M.pause(),l.dataset.paused="true",h.classList.remove("fa-volume-high"),h.classList.add("fa-volume-xmark"))}));const G=c.Human,L=u.gameboard.getBattlefield(),R=G.gameboard.getBattlefield();return{playerComputer:u,playerHuman:G,createGrid(){const t=[],e=[];w.forEach((e=>{t.push(e[0])})),w.forEach((t=>{e.push(t[1])}));let r=e.shift(),a=t.shift(),s="Horizontal";s=1===F?"Vertical":"Horizontal",y.textContent=`Place your ${a}`,S.textContent=1===r?`Ship length: ${r} cell`:`Ship length: ${r} cells`,v.textContent=`Direction: ${s}`;const o=G.gameboard.getFleet();I.style.setProperty("--grid-rows",10),I.style.setProperty("--grid-cols",10);for(let i=0;i<L.length;i++){const n=document.createElement("div");n.dataset.id=`psc${i}`,R[i].isFree||(n.dataset.isFree="occupied"),R[i].isHit&&(n.dataset.isHit="hit"),R[i].shipId&&(n.dataset.shipId="ship"),I.appendChild(n).className="grid-item",n.addEventListener("mouseover",(()=>{const t=i;this.checkCoordIsValid(t,r)?n.dataset.valid=!0:n.dataset.valid=!1})),n.addEventListener("click",(()=>{const n=i,d=this.createCoords(n,r);void 0!==d&&(G.gameboard.placeShip(r,d),this.updatePlaceShipContainer(),this.updateHumanBoard(),a=t.shift(),r=e.shift()),s=1===F?"Vertical":"Horizontal",y.textContent=`Place your ${a}`,S.textContent=1===r?`Ship length: ${r} cell`:`Ship length: ${r} cells`,v.textContent=`Direction: ${s}`,8===o.length&&(A(p),this.playAudio())}))}},checkCoordIsValid:(e,r)=>!!t.isFit(F,e,r),createCoords(e,r){let a;return this.checkCoordIsValid(e,r)&&(a=t.createShipCoords(F,e,r)),a},updatePlaceShipContainer(){for(let t=0;t<R.length;t++){const e=document.querySelector(`[data-id="psc${t}"]`);R[t].isFree||(e.dataset.isFree="occupied"),R[t].isHit&&(e.dataset.isHit="hit"),R[t].shipId&&(e.dataset.shipId="ship")}},announceShipCreation(){$(p)},playAudio(){M.play(),M.volume=.2},renderBoards(){n.style.setProperty("--grid-rows",10),n.style.setProperty("--grid-cols",10),d.style.setProperty("--grid-rows",10),d.style.setProperty("--grid-cols",10);for(let t=0;t<L.length;t++){const e=document.createElement("div");e.dataset.id=t,L[t].isFree||(e.dataset.isFree="occupied"),L[t].isHit&&(e.dataset.isHit="hit"),L[t].shipId&&(e.dataset.shipId="ship"),d.appendChild(e).className="grid-item",e.addEventListener("click",(()=>{if((G.gameboard.isGameOver()||u.gameboard.isGameOver())&&(G.turn=!1,this.endGame()),G.turn&&!e.dataset.isHit){u.gameboard.receiveAttack(t),e.dataset.isHit="hit";u.gameboard.getSunkFleet().includes(t)&&(e.dataset.sunk="true"),this.updateHumanBoard(),this.updateComputerBoard(),G.turn=!1,u.turn=!0,(G.gameboard.isGameOver()||u.gameboard.isGameOver())&&(G.turn=!1,this.endGame())}u.turn&&(this.attack(),this.updateHumanBoard(),this.updateComputerBoard(),u.turn=!1,G.turn=!0)}))}for(let t=0;t<R.length;t++){const e=document.createElement("div");e.dataset.id=`p${t}`,R[t].isFree||(e.dataset.isFree="occupied"),R[t].isHit&&(e.dataset.isHit="hit"),R[t].shipId&&(e.dataset.shipId="ship"),n.appendChild(e).className="grid-item"}},endGame(){$(m);const t=G.gameboard.getHitCounter(),e=G.gameboard.getMissedShotCounter(),r=u.gameboard.getHitCounter(),a=u.gameboard.getMissedShotCounter();G.gameboard.isGameOver()?b.textContent="Computer wins":b.textContent="Player wins",B.textContent=`Computer hits: ${t}`,k.textContent=`Computer missed shots: ${e}`,E.textContent=`Player hits: ${r}`,H.textContent=`Player missed shots: ${a}`},randomCoord:()=>Math.floor(100*Math.random()),randomAttack(){let t=this.randomCoord();i.includes(t)?(t=this.randomCoord(),this.randomAttack()):(i.push(t),G.gameboard.receiveAttack(t)?(e=!0,!i.includes(t+1)&&t+1<100&&r.push(t+1),!i.includes(t-1)&&t-1>=0&&r.push(t-1),!i.includes(t+10)&&t+10<100&&r.push(t+10),!i.includes(t-10)&&t-10>=0&&r.push(t-10)):e=!1)},targetAttack(){const t=r.shift();i.push(t),void 0===t&&this.randomAttack(),G.gameboard.receiveAttack(t)?(e=!0,!i.includes(t+1)&&t+1<100&&r.push(t+1),!i.includes(t-1)&&t-1>=0&&r.push(t-1),!i.includes(t+10)&&t+10<100&&r.push(t+10),!i.includes(t-10)&&t-10>=0&&r.push(t-10)):e=!1},attack(){e||0!==r.length?this.targetAttack():this.randomAttack()},updateHumanBoard(){for(let t=0;t<R.length;t++){const e=document.querySelector(`[data-id="p${t}"]`),r=G.gameboard.getSunkFleet();R[t].isFree||(e.dataset.isFree="occupied"),R[t].isHit&&(e.dataset.isHit="hit"),R[t].shipId&&(e.dataset.shipId="ship"),r.includes(t)&&(e.dataset.sunk="true")}},updateComputerBoard(){for(let t=0;t<L.length;t++){const e=document.querySelector(`[data-id="${t}"]`),r=u.gameboard.getSunkFleet();L[t].isFree||(e.dataset.isFree="occupied"),L[t].isHit&&(e.dataset.isHit="hit"),L[t].shipId&&(e.dataset.shipId="ship"),r.includes(t)&&(e.dataset.sunk="true")}}}}},417:(t,e,r)=>{const a=r(507);t.exports=function(){const t=a();return{initNewGame(){const e=t.createPlayer("Computer"),r=t.createPlayer("Human");return{computerBattlefield:e.gameboard.getBattlefield(),humanBattlefield:r.gameboard.getBattlefield(),Computer:e,Human:r}}}}},498:(t,e,r)=>{const a=r(643);t.exports=function(){let t=0,e=0;const r=[],s=[];return{createCell:t=>({id:t,isFree:!0,isHit:!1,shipId:null}),createGameboard(){for(let t=0;t<100;t++)s.push(this.createCell(t));return s},placeShip(t,e){const o=a(t,e);r.push(o);return e.forEach((t=>{s[t].isFree=!1,s[t].shipId=o.id})),s},getBattlefield:()=>s,getFleet:()=>r,getHitCounter:()=>t,getMissedShotCounter:()=>e,receiveAttack(a){const o=a;if(!1===s[o].isHit&&!1===s[o].isFree){return r.find((t=>t.id===s[o].shipId)).hit(o),s[o].isHit=!0,t++,!0}return s[o].isHit=!0,e++,!1},isGameOver(){let t=0;for(let e=0;e<r.length;e++)!0===r[e].isSunk()&&t++;return t===r.length},getSunkFleet(){const t=[];for(let e=0;e<r.length;e++)!0===r[e].isSunk()&&r[e].coords.forEach((e=>{t.push(e)}));return t}}}},507:(t,e,r)=>{const a=r(498);t.exports=function(){return{createPlayer(t){const e=a();return e.createGameboard(),{playerName:t,gameboard:e,turn:!1}},changeTurn:t=>t.turn?(t.turn=!1,t.turn):(t.turn=!0,t.turn),attack:(t,e)=>t.gameboard.receiveAttack(e),randomCoord:()=>Math.floor(100*Math.random())}}},643:(t,e,r)=>{const a=r(104);t.exports=function(t,e){let r=0;return{id:a.time(),length:t,coords:e,hit(t){const a=Number(t);return!!e.includes(a)&&(r++,!0)},isSunk:()=>r===t}}},693:(t,e,r)=>{"use strict";t.exports=r.p+"sounds/audiob7c787f64ffc370f21af.ogg"}},e={};function r(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";const t=r(171)();t.createGrid(),t.announceShipCreation(),t.renderBoards(),t.playerHuman.turn=!0})()})();