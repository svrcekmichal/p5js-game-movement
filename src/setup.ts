export const setup = () => {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(20.0);
  stroke(255, 100);
}

export const windowResized = () => {
  resizeCanvas(window.innerWidth, window.innerHeight)
}