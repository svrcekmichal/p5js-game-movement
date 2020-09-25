import P5 from 'p5'
export const drawFramerate = (p: P5) => {
  p.push()
  let fps = p.frameRate()
  p.fill(255)
  p.stroke(255)
  p.text('FPS: ' + fps.toFixed(2), 10, p.height - 10)
  p.pop()
}
