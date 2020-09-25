import React, { FC } from 'react'
import P5Wrapper from 'react-p5-wrapper'
import P5 from "p5"
import {drawPlayer} from "./player";

import { setup, windowResized } from './setup'

const draw = (p: P5) => () => {
	p.background(0)
	drawPlayer(p)
}

const sketch = (p: P5) => {
	p.setup = setup(p)
	p.windowResized = windowResized(p)
	p.draw = draw(p)
}

export default () => (
	<P5Wrapper sketch={sketch} />
)
