let values = [];
let red = [];

let i = 0;
let j = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(width);
    colours = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
        colours[i] = false;
    }
}

function draw() {
    background(0);

    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                swap(values, j, j + 1);
                colours[j] = true;
            }
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        if (colours[j]) stroke(0, 255, 0);
        else stroke(255);
        // line(i, height, i, height - values[i]);
        circle(i, height - values[i], 1);
        colours[i] = false;
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}