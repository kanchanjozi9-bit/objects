const r = require("raylib");

function setup() {
    r.InitWindow(900, 900, "something");
    r.SetTargetFPS(40);
}

function update() {}

const circle = {
    x: 450,
    y: 450,
    r: 200,
    c: r.WHITE,
};

function createSectors(s) {
    r.DrawCircleSector(s);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawCircleLines(circle.x, circle.y, circle.r, circle.c);
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
