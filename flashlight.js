const r = require("raylib");

function setup() {
    r.InitWindow(900, 900, "something");
    r.SetTargetFPS(40);
}

function update() {
    light = showlight(light);
}

const center = {
    x: 400,
    y: 300,
    width: 50,
    height: 300,
};
let light = {
    x: center.x + center.width / 2,
    y: center.y - 4,
    c: r.BLACK,
};
const on = {
    x: center.x + center.width / 2 - 5,
    y: center.y + center.height / 2,
    width: 20,
    height: 70,
};
const head = {
    x: center.x + center.width / 2,
    y: center.y + 30,
};
function onclick() {
    return r.IsKeyPressed(r.KEY_SPACE);
}
function showlight(obj) {
    onclick() ? (obj.c = r.GOLD) : (obj.c = r.BLACK);
    return obj;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangleRounded(center, 0.6, 8, r.GRAY);
    r.DrawRectangleRounded(on, 0.8, 8, r.BLACK);
    r.DrawCircleSector(light, 230, 120, 240, 1, light.c);
    r.DrawCircleSector(head, 60, 120, 240, 10, r.GRAY);

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
