const r = require("raylib");

function setup() {
    const WIDTH = 1100;
    const HEIGHT = 840;
    const FPS = 50;
    const numberOfCells = 200;
    const palette = {
        0: r.SKYBLUE,
        1: r.SKYBLUE,
        2: r.WHITE,
        bg: r.BLACK,
    };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Zooommmmmm");
    r.SetTargetFPS(FPS);

    return {
        WIDTH,
        HEIGHT,
        FPS,
        palette,
        numberOfCells,
    };
}

function chooseColor(world, i, j) {
    const sin = Math.floor(Math.sin(i - j + world.cf) * 255) % 255;
    const cos = Math.floor(Math.cos(i - j + world.cf) * 750) % 255;
    return { r: sin, g: sin, b: cos, a: 210 };
}

function drawPattern(world) {
    const rec = {
        x: 400,
        y: 500,
        width: 7,
        height: 7,
    };
    const origin = {
        x: 40,
        y: 100,
    };
    for (let j = 0; j < world.numberOfCells; j++) {
        for (let i = 0; i < world.numberOfCells; i++) {
            r.DrawRectanglePro(
                rec,
                origin,
                25 + world.cf * 2,
                chooseColor(world, i, j),
            );
            rec.x = i * rec.width;
        }
        rec.y = j * rec.height;
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(world.palette.bg);
    drawPattern(world);
    r.EndDrawing();
}

function loop(world) {
    world.cf = world.FPS;
    while (!r.WindowShouldClose()) {
        world.cf++;
        draw(world);
    }
}

function main() {
    const world = setup();

    loop(world);
}
main();
