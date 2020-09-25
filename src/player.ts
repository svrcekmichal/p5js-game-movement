import P5 from "p5"
import {getMovement} from "./movement";

interface PlayerPosition {
  x: number
  y: number
}

function movePlayerPosition(p: P5, current: PlayerPosition): PlayerPosition {
  const { x: moveX, y: moveY } = getMovement(p)
  return { x: current.x + moveX, y: current.y + moveY }
}

function getPlayerAngle(p: P5, playerPosition: PlayerPosition) {
  const dx = p.mouseX - playerPosition.x;
  const dy = p.mouseY - playerPosition.y;
  return p.atan2(dy, dx)
}

export const createPlayer = (x, y, hexaColor: string) => {
  let playerPosition: PlayerPosition = { x, y }

  const draw = (p: P5) => {
    playerPosition = movePlayerPosition(p, playerPosition)
    p.push();
    p.strokeWeight(20.0);
    p.stroke(255, 100);
    p.fill(p.color(hexaColor))
    p.translate(playerPosition.x, playerPosition.y);
    p.rotate(getPlayerAngle(p, playerPosition));
    p.ellipse(0 , 0, 20, 20)
    p.line(0, 0, 30, 0);
    p.pop();
  }

  return {
    draw
  }
}