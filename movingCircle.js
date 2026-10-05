const r = require("raylib");

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(1000, 1000, "A Window");
    r.SetTargetFPS(40);
}

const yellowBall = { x: 400, y: 300, r: 70, v: 2, color: r.GOLD };
const blueBall = { x: 500, y: 500, r: 40, v: -3, color: r.BLUE };

function calcNewVelocity(c) {
    return outOfBound() ? -c.v : c.v;
}

function outOfBound() {
    return (
        yellowBall.x < yellowBall.r ||
        yellowBall.x > r.GetScreenWidth() - yellowBall.r ||
        blueBall.x < blueBall.r ||
        blueBall.x > r.GetScreenWidth() - blueBall.r
    );
}

function updateCircle(c) {
    c.v = calcNewVelocity(c);
    c.x += c.v;
    c.y += c.v;
}
function update() {
    updateCircle(yellowBall);
    updateCircle(blueBall);
}
function drawBall(b) {
    r.DrawCircleV(b, b.r, b.color);
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawBall(yellowBall);
    drawBall(blueBall);
    drawLine();
    r.EndDrawing();
}

function drawLine() {
    r.DrawLineV(yellowBall, blueBall, r.SKYBLUE);
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}
function main() {
    setup();
    loop();
}
main();
