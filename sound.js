const r = require("raylib");

function setup() {
    const WIDTH = 1400;
    const HEIGHT = 1000;
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

    const image = r.LoadImage("Screenshot 2026-10-09 at 4.33.13 PM.png");
    const texture = r.LoadTextureFromImage(image); // const twinkle = r.LoadSound("twinkle copy.wav");

    r.DrawTexture(texture, -30, -40, r.WHITE);
    r.DrawText("hello", 400, 600, 80, r.BLACK);
    // if (r.IsKeyPressed(r.KEY_SPACE)) r.PlaySound(twinkle);
    // if (r.IsKeyPressed(r.KEY_Q)) r.StopAudio(twinkle);

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
