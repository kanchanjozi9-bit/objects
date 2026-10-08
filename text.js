const r = require("raylib");

function setup() {
    const world = {};
    world.width = 900;
    world.height = 900;
    ((world.page = {
        x: 10,
        y: 10,
        width: world.width - 20,
        height: world.height - 20,
        color: r.BLACK,
        t: "",
    }),
        r.SetTraceLogLevel(r.LOG_NONE));
    r.InitWindow(world.width, world.height, "Text");
    r.SetTargetFPS(50);

    return world;
}

const currentLine = {
    x: 12,
    y: 12,
    t: "",
};
function getKey() {
    return r.GetCharPressed();
}

function measureText(currentLine) {
    let textWidth = r.MeasureText(currentLine.t, 40);
    return textWidth;
}
function isLineFull(currentLine, world) {
    return measureText(currentLine) >= world.page.width - 20;
}

function getText(world) {
    let key = getKey();
    while (key > 0) {
        if (!isLineFull(currentLine, world)) {
            currentLine.t += String.fromCodePoint(key);
        } else {
            world.page.t += currentLine.t + "\n";
            currentLine.x = 12;
            currentLine.y += world.page.y + 50;
            currentLine.t = "";
        }

        key = getKey();
    }
}

function update(world) {
    getText(world);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    r.DrawRectangleRec(world.page, r.GRAY);
    r.DrawText(world.page.t + " ", world.page.x, world.page.y, 40, r.BLACK);
    r.DrawText(currentLine.t + " ", currentLine.x, currentLine.y, 40, r.BLACK);
    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}
main();
