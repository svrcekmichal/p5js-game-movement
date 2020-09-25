import P5 from "p5";

export const setup = (p: P5) => () => {
  p.createCanvas(window.innerWidth, window.innerHeight);
  p.strokeWeight(20.0);
  p.stroke(255, 100);
}

export const windowResized = (p: P5) => () => {
  p.resizeCanvas(window.innerWidth, window.innerHeight)
}