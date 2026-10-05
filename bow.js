const r = require("raylib");

function setup() {
    r.InitWindow(900, 900, "something");
    r.SetTargetFPS(40);
}

function update() {}

const center = {
    x: 200,
    y: 200,
    width: 50,
    height: 40,
};

const left = {
    x: center.x + center.width * 0.4,
    y: center.y + center.height / 2,
};
const right = {
    x: left.x + 10,
    y: left.y,
};
const bottom = {
    x: left.x + 5,
    y: left.y - 20,
};
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRounded(center, 0.3, 8, r.PINK);
    r.DrawCircleSector(left, 80, 240, 300, 8, r.PINK);
    r.DrawCircleSector(bottom, 160, 350, 340, 8, r.PINK);
    r.DrawCircleSector(right, 80, 120, 60, 8, r.PINK);
    r.DrawCircleSector(bottom, 160, 10, 20, 10, r.PINK);
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
