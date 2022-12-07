let r;
let pi = 0;

function setup() {
    r = min(windowWidth, windowHeight);
    createCanvas(r, r);
    r = min(width, height);

    background(51);
    stroke(255);
    noFill();
    circle(width / 2, height / 2, r); 
}

let cir = 0;
let total = 0;
function draw() {
    
    // strokeWeight(5);

    stroke(0, 255, 0);
    strokeWeight(0.25);
    textSize(32);
    text("pi: " + pi, width / 2, height / 2);

    stroke(200);
    strokeWeight(2);

    let x = random(width);
    let y = random(height);
    point(x, y);

    if (x <= r && y <= r) cir++;
    total++;

    pi = (float(cir) / float(total)) * 4;
}