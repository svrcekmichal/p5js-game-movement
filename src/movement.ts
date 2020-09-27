import P5 from 'p5'
function isDirectionUp(p: P5) {
  return p.keyIsDown(p.UP_ARROW) || p.keyIsDown(87) //W
}

function isDirectionDown(p: P5) {
  return p.keyIsDown(p.DOWN_ARROW) || p.keyIsDown(83) //S
}

function isDirectionLeft(p: P5) {
  return p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65) //A
}

function isDirectionRight(p: P5) {
  return p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68) //D
}

let rawSpeed = 2
export function getMovement(p: P5): { x: number; y: number } {
  const isUp = isDirectionUp(p)
  const isDown = isDirectionDown(p)
  const isLeft = isDirectionLeft(p)
  const isRight = isDirectionRight(p)
  if (isUp || isDown || isLeft || isRight) {
    rawSpeed = Math.min(rawSpeed * 1.2, 12)
  } else {
    rawSpeed = 2
  }
  const speed = rawSpeed * p.deltaTime / 50
  const twoDirectionSpeed = Math.sqrt((speed * speed) / 2)
  switch (true) {
    //bi direction movement
    case isUp && isLeft:
      return { x: -twoDirectionSpeed, y: -twoDirectionSpeed }
    case isUp && isRight:
      return { x: twoDirectionSpeed, y: -twoDirectionSpeed }
    case isDown && isLeft:
      return { x: -twoDirectionSpeed, y: twoDirectionSpeed }
    case isDown && isRight:
      return { x: twoDirectionSpeed, y: twoDirectionSpeed }
    //single direction movement
    case isUp:
      return { x: 0, y: -speed }
    case isDown:
      return { x: 0, y: speed }
    case isLeft:
      return { x: -speed, y: 0 }
    case isRight:
      return { x: speed, y: 0 }
    default:
      return { x: 0, y: 0 }
  }
}
