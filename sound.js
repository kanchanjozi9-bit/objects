const r = require("raylib");

function setup() {
    const WIDTH = 1100;
    const HEIGHT = 840;
    const palette = {
        0: r.BlACK,
        1: r.SKYBLUE,
        2: r.WHITE,
        bg: r.WHITE,
    };
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "sound");
    const FPS = 50;
    r.SetTargetFPS(FPS);
    r.InitAudioDevice();

    return {
        WIDTH,
        HEIGHT,
        FPS,
        palette,
    };
}

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(world.palette.bg);
    r.DrawRectangle(50, 50, 70, 80, r.GOLD);

    const twinkle = r.LoadSound("twinkle copy.wav");

    if (r.IsKeyPressed(r.KEY_SPACE)) r.PlaySound(twinkle);
    if (r.IsKeyPressed(r.KEY_Q)) r.StopAudio(twinkle);

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
    r.CloseAudioDevice();
}
main();
