let values;

function setup() {
    createCanvas(600, 600);
    values = Array(width / 2);
    for (let i=0;i<values.length;i++) {
        values.push(Math.floor(Math.random() * height));
        console.log(values[i]);
    }
}

function draw() {
    background(0);
    for (let i=0;i<values.length;i++) {
        stroke(255);
        circle(i, values[i], 2);
        console.log(i);
        console.log(values[i]);
    }
}