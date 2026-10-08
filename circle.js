const r = require("raylib");

function setup() {
    const WIDTH = 1100;
    const HEIGHT = 840;
    const numberOfCells = 20;
    const palette = {
        0: r.SKYBLUE,
        1: r.SKYBLUE,
        2: r.WHITE,
        bg: r.WHITE,
    };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Rings");
    const FPS = 5;
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
    const sin = Math.floor(Math.sin(i / j + world.cf) * 255) % 255;
    const cos = Math.floor(Math.cos(i / j + world.cf) * 750) % 255;
    return { r: cos, g: 0, b: 0, a: 210 };
}
function createRing(world, ring, i, j) {
    const color = chooseColor(world, i, j);
    r.DrawRing(ring, 30, 70, 270, 10, 10, color);
}
function drawPattern(world) {
    const ring = {
        x: 0,
        y: 0,
        width: world.WIDTH / world.numberOfCells,
        height: world.HEIGHT / world.numberOfCells,
    };
    for (let j = 0; j < ring.height; j++) {
        for (let i = 0; i < ring.width; i++) {
            ring.x = i * ring.width;
            createRing(world, ring, i, j);
        }
        ring.y = j * ring.height;
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
