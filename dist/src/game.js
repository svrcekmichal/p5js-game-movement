var x = 100;
var y = 100;
function setup() {
    createCanvas(600, 400);
    strokeWeight(20.0);
    stroke(255, 100);
}
function draw() {
    background(0);
    var _a = getMovement(), moveX = _a.x, moveY = _a.y;
    x += moveX;
    y += moveY;
    var dx = mouseX - x;
    var dy = mouseY - y;
    var angle1 = atan2(dy, dx);
    segment(x, y, angle1);
    ellipse(x, y, 20, 20);
}
function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, 30, 0);
    pop();
}
function isDirectionUp() {
    return keyIsDown(UP_ARROW);
}
function isDirectionDown() {
    return keyIsDown(DOWN_ARROW);
}
function isDirectionLeft() {
    return keyIsDown(LEFT_ARROW);
}
function isDirectionRight() {
    return keyIsDown(RIGHT_ARROW);
}
var speed = 1;
function getMovement() {
    var twoDirectionSpeed = Math.sqrt(speed / 2);
    var isUp = isDirectionUp();
    var isDown = isDirectionDown();
    var isLeft = isDirectionLeft();
    var isRight = isDirectionRight();
    if (isUp || isDown || isLeft || isRight) {
        speed = Math.min(speed * 1.2, 6);
    }
    else {
        speed = 1;
    }
    switch (true) {
        //bi direction movement
        case isUp && isLeft: return { x: 0, y: 0 };
        case isUp && isRight: return { x: 0, y: 0 };
        case isDown && isLeft: return { x: 0, y: 0 };
        case isDown && isRight: return { x: 0, y: 0 };
        //single direction movement
        case isUp: return { x: 0, y: 0 };
        case isDown: return { x: 0, y: 0 };
        case isLeft: return { x: 0, y: 0 };
        case isRight: return { x: 0, y: 0 };
        default: return { x: 0, y: 0 };
    }
}
//# sourceMappingURL=game.js.map