import React, { FC } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import P5 from 'p5'
import { createPlayer } from './player'
import { setup, windowResized } from './setup'
import { palette } from './constants/color-palette'
import { drawFramerate } from './framerate'

const playerA = createPlayer(100, 100, palette.blue)

const draw = (p: P5) => () => {
  p.background(0)
  playerA.draw(p)
  drawFramerate(p)
}

const sketch = (p: P5) => {
  p.setup = setup(p)
  p.windowResized = windowResized(p)
  p.draw = draw(p)
}

const Game = () => <P5Wrapper sketch={sketch} />

export default Game
