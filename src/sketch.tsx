import React, { FC } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import P5 from "p5"
import {createPlayer} from "./player";
import { setup, windowResized } from './setup'
import {colors} from "./constants/color-palette";
import {drawFramerate} from "./framerate";

const player = createPlayer(100, 100, colors.lightGreen)

const draw = (p: P5) => () => {
	p.background(0)
	player.draw(p)
	drawFramerate(p)
}

const sketch = (p: P5) => {
	p.setup = setup(p)
	p.windowResized = windowResized(p)
	p.draw = draw(p)
}

const Game = () => (
	<P5Wrapper sketch={sketch} />
)

export default Game
