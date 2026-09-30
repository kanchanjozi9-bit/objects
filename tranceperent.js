const r = require("raylib");

function setup() {
    r.InitWindow(400, 500, "OBJECT");
    r.SetTargetFPS(40);
}

const blue = {
    r: 50,
    g: 100,
    b: 220,
    a: 255,
};
const windowRect = {
    x: 50,
    y: 50,
    width: 100,
    height: 80,
};
const windowRect2 = {
    x: 70,
    y: 50,
    width: 80,
    height: 80,
};
const glass = {
    r: 255,
    g: 50,
    b: 50,
    a: 120,
};

const button = {
    position: {
        x: 100,
        y: 100,
    },
    size: {
        x: 200,
        y: 50,
    },
};

const panel = {
    x: 50,
    y: 50,
    width: 300,
    height: 150,
};

const target = {
    x: 200,
    y: 100,
};

const spaceship = {
    position: {
        x: 100,
        y: 120,
    },

    size: {
        x: 60,
        y: 30,
    },

    color: r.WHITE,
};

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    // r.DrawRectangleRec(windowRect, r.BLUE);
    // r.DrawRectangleLines(
    //     windowRect.x,
    //     windowRect.y,
    //     windowRect.width,
    //     windowRect.height,
    //     r.WHITE,
    // );
    // r.DrawRectangleRounded(windowRect, 0.2, 8, r.BLUE);
    // r.DrawRectangleRec(panel, r.BLUE);
    // r.DrawRectangleRounded(panel, 0.2, 8, r.BLUE);
    //r.DrawRectangleRoundedLines(panel, 0.2, 8, 2, r.WHITE);
    //r.DrawRectangleRoundedLines(windowRect, 0.2, 8, 4, r.WHITE);
    // r.DrawRectangleGradientH(
    //     panel.x,
    //     panel.y,
    //     panel.width,
    //     panel.height,
    //     r.BLUE,
    //     r.WHITE,
    // );

    // r.DrawRectangleGradientV(
    //     panel.x,
    //     panel.y,
    //     panel.width,
    //     panel.height,
    //     r.BLUE,
    //     r.WHITE,
    // );

    // r.DrawRectangleRoundedLinesEx(windowRect2, 0.2, 8, 4, r.WHITE);
    //r.DrawRectangleV(button.position, button.size, r.WHITE);

    // r.DrawCircleV(target, 30, r.RED);
    // r.DrawCircleLines(target.x, target.y, 30, r.WHITE);
    // r.DrawCircleSector(target, 40, 0, 90, 20, r.BLUE);
    // r.DrawCircleSectorLines(target, 40, 0, 90, 20, r.WHITE);

    // r.DrawRectangleV(spaceship.position, spaceship.size, spaceship.color);
    r.DrawRectangleRounded(
        {
            x: spaceship.position.x,
            y: spaceship.position.y,
            width: spaceship.size.x,
            height: spaceship.size.y,
        },
        0.3,
        8,
        spaceship.color,
    );

    r.EndDrawing();
}
function main() {
    setup();
    while (!r.WindowShouldClose()) {
        draw();
    }
}
main();
