const r = require("raylib");

r.InitWindow(1000, 1000, "A Window");
r.SetTargetFPS(40);

const window = {
    x: 0,
    y: 0,
    width: 300,
    height: 200,
};
const blue = {
    r: 50,
    g: 255,
    b: 220,
    a: 100,
};

const button = {
    x: 400,
    y: 0,

    width: 200,
    height: 200,
};

const target = {
    x: 600,
    y: 500,
    r: 6,
};

function createTarget(radius) {
    if (radius > r.GetScreenWidth() / 2 - 200) {
        return;
    }
    radius += 45;

    let color = radius % 2 === 0 ? r.RED : r.WHITE;

    createTarget(radius);

    r.DrawCircle(target.x, target.y, radius, color);
}
function update() {}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawRectangleRounded(window, 0.3, 8, blue);
    r.DrawRectangleRoundedLines(window, 0.3, 8, 3, r.WHITE);

    r.DrawRectangleRounded(button, 1, 8, blue);
    r.DrawRectangleRoundedLines(button, 1, 8, 2, r.WHITE);

    createTarget(target.r);

    r.EndDrawing();
}
while (!r.WindowShouldClose()) {
    update();
    draw();
}
