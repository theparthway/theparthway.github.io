let values = [];
let comparisons = 0;

let i = 0;
let j = 0;

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
}

function draw() {
    background(0);

    textSize(16);
    fill(255);
    strokeWeight(0.5);
    textAlign(CENTER);
    text('Bubble Sort Visualization', width / 2, 20);
    textAlign(LEFT, CENTER);
    text('Array Size: ' + width, 10, 20)
    text('Comparisons: ' + comparisons, 10, 40);
    text('Time elapsed: ' + (millis() / 1000), 10, 60);

    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (values[j] > values[j + 1]) {
                swap(values, j, j + 1);
                comparisons++;
            }
        }
    } else {
        console.log("finished");
        noLoop();
    }
    i++;

    for (let i = 0; i < values.length; i++) {
        stroke(255);
        strokeWeight(1);
        // line(i, height, i, height - values[i]);
        circle(i, height - values[i], 1);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}