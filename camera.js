const r = require("raylib");

function setup() {
    r.InitWindow(900, 900, "something");
    r.SetTargetFPS(40);
}

function update() {}

const center = {
    x: 400,
    y: 200,
    width: 200,
    height: 100,
};

const left = {
    x: center.x + center.width * 0.2,
    y: center.y + center.height / 2,
};

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRounded(center, 0.3, 8, r.GRAY);
    r.DrawCircleSector(left, 150, 240, 300, 1, r.GRAY);
    r.EndDrawing();
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
