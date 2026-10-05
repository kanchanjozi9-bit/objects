const r = require("raylib");
let text = "";
let x = 10;
let y = 10;
function setup() {
    const world = {};
    world.width = 650;
    world.height = 600;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.width, world.height, "Text");
    r.SetTargetFPS(50);

    return world;
}
function getKey() {
    let key = r.GetCharPressed();
    return key;
}

function getText() {
    let key = getKey();
    while (key > 0) {
        text += String.fromCodePoint(key);
        key = getKey();
        nextLine();
    }
    return text;
}
function measureText() {
    let textWidth = r.MeasureText(getText(), 40);
    return textWidth;
}
function nextLine() {
    if (measureText() >= r.GetScreenWidth() - 10) {
        x = 10;
        y += 50;
    }
}
function update() {
    getText();
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawText(text + " ", x, y, 40, r.WHITE);
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update();
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();
