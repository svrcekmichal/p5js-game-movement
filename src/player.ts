import {getMovement} from "./movement";

let playerX = 100;
let playerY = 100;

interface PlayerPosition {
  playerX: number
  playerY: number
}

function getPlayerPosition(): PlayerPosition {
  const { x: moveX, y: moveY } = getMovement()
  playerX += moveX
  playerY += moveY
  return { playerX, playerY }
}

function getPLayerAngle(playerPosition: PlayerPosition) {
  const dx = mouseX - playerX;
  const dy = mouseY - playerY;
  return atan2(dy, dx)
}

export function drawPlayer() {
  const playerPosition = getPlayerPosition()
  push();
  translate(playerPosition.playerX, playerPosition.playerY);
  rotate(getPLayerAngle(playerPosition));
  ellipse(0 , 0, 20, 20)
  line(0, 0, 30, 0);
  pop();
}