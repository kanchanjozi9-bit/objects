const r = require("raylib");

function setup() {
    r.InitWindow(900, 900, "something");
    r.SetTargetFPS(40);
}

function update() {
    ear.x = face.x + 40;
    ear.y = face.y + 40;
    ear2.x = face.x + face.width - 40;
    ear2.y = face.y + 40;
    eye.x = ear.x;
    eye.y = ear.x + 40;
    eyeW.x = eye.x + 29;
    eyeW.y = eye.y + 15;
    eye2.x = eye.x + 230;
    eye2.y = eye.y;
    eyeW2.x = eye2.x + 29;
    eyeW2.y = eye2.y + 15;
    lips.x = face.x + 150;
    lips.y = face.y + 230;
}

let face = {
    x: 300,
    y: 300,
    width: 400,
    height: 350,
};
const ear = {
    x: 0,
    y: 0,
};

const ear2 = {
    x: 0,
    y: 0,
};

const eye = {
    x: 0,
    y: 0,
    width: 70,
    height: 100,
};
const eyeW = {
    x: 0,
    y: 0,
    width: 40,
    height: 70,
};

const eye2 = {
    x: 0,
    y: 0,
    width: 70,
    height: 100,
};
const eyeW2 = {
    x: 0,
    y: 0,
    width: 40,
    height: 70,
};

const lips = {
    x: 0,
    y: 0,
    width: 60,
    height: 20,
};
function getRandom(obj) {
    obj.x = r.GetMouseX();
    obj.y = r.GetMouseY();
    return obj;
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);
    r.DrawCircleSector(ear, 70, 355, 80, 1, r.BLACK);
    r.DrawCircleSector(ear2, 70, 270, 10, 1, r.BLACK);
    r.DrawRectangleRounded(face, 0.8, 8, r.WHITE);
    r.DrawRectangleRounded(eye, 0.8, 5, r.BLACK);
    r.DrawRectangleRounded(eyeW, 1, 5, r.WHITE);
    r.DrawRectangleRounded(eye2, 0.8, 5, r.BLACK);
    r.DrawRectangleRounded(eyeW2, 1, 5, r.WHITE);
    r.DrawRectangleRounded(lips, 0.8, 5, r.BLACK);
    r.DrawText("HELLOOOOOOOO.........", 30, 30, 50, r.WHITE);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        face = getRandom(face);
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
}
main();
