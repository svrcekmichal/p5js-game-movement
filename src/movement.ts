function isDirectionUp() {
  return keyIsDown(UP_ARROW)
   || keyIsDown(87) //W
}

function isDirectionDown() {
  return keyIsDown(DOWN_ARROW)
    || keyIsDown(83) //S
}

function isDirectionLeft() {
  return keyIsDown(LEFT_ARROW)
    || keyIsDown(65) //A

}

function isDirectionRight() {
  return keyIsDown(RIGHT_ARROW)
    || keyIsDown(68) //D
}

let speed = 1
export function getMovement(): {x: number, y: number} {
  const twoDirectionSpeed = Math.sqrt(speed * speed / 2)
  const isUp = isDirectionUp()
  const isDown = isDirectionDown()
  const isLeft = isDirectionLeft()
  const isRight = isDirectionRight()
  if (isUp || isDown || isLeft || isRight) {
    speed = Math.min(speed * 1.2, 6)
  } else {
    speed = 1
  }
  switch(true) {
    //bi direction movement
    case isUp && isLeft: return {x:-twoDirectionSpeed, y:-twoDirectionSpeed}
    case isUp && isRight: return {x:twoDirectionSpeed, y:-twoDirectionSpeed}
    case isDown && isLeft: return {x:-twoDirectionSpeed, y:twoDirectionSpeed}
    case isDown && isRight: return {x:twoDirectionSpeed, y:twoDirectionSpeed}
    //single direction movement
    case isUp: return {x:0, y:-speed}
    case isDown: return {x:0, y:speed}
    case isLeft: return {x:-speed, y:0}
    case isRight: return {x:speed, y:0}
    default: return {x:0, y:0}
  }
}