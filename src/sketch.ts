/// <reference path="../node_modules/@types/p5/global.d.ts" />
import {drawPlayer} from "./player";

require("p5")

import { setup, windowResized } from './setup'

function draw() {
	background(0)
	drawPlayer()
}

// @ts-ignore
window['setup'] = setup
// @ts-ignore
window['windowResized'] = windowResized
// @ts-ignore
window['draw'] = draw