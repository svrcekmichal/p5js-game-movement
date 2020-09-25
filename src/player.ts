import P5 from "p5"
import {getMovement} from "./movement";

let playerX = 100;
let playerY = 100;

interface PlayerPosition {
  playerX: number
  playerY: number
}

function getPlayerPosition(p: P5): PlayerPosition {
  const { x: moveX, y: moveY } = getMovement(p)
  playerX += moveX
  playerY += moveY
  return { playerX, playerY }
}

function getPlayerAngle(p: P5, playerPosition: PlayerPosition) {
  const dx = p.mouseX - playerPosition.playerX;
  const dy = p.mouseY - playerPosition.playerY;
  return p.atan2(dy, dx)
}

export function drawPlayer(p: P5) {
  const playerPosition = getPlayerPosition(p)
  p.push();
  p.translate(playerPosition.playerX, playerPosition.playerY);
  p.rotate(getPlayerAngle(p, playerPosition));
  p.ellipse(0 , 0, 20, 20)
  p.line(0, 0, 30, 0);
  p.pop();
}