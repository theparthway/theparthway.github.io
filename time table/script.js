const container = document.querySelector(".container");
const input = document.querySelector(".input");
const section = document.querySelector(".section");

const cols = [];


for (let i=0;i<9;i++) {
    let cell = document.createElement("div");
    cols.push(cell);
    container.appendChild(cell);
}

const now = document.querySelector('input[value="now"]');
const full = document.querySelector('input[value="full"]');

const timings = ['8:25-9:20', '9:25-10:20', '10:35-11:30', '11:35-12:30', '12:35-1:30', '1:35-2:30', '2:35-3:30', '3:35-4:30', '4:35-5:30'];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ist = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
// let hour = ist.getHours();
// let minute = ist.getMinutes();

let hour = ist.getHours();
let minute = ist.getMinutes();
let day = ist.getDay();

function setLabels(s) {
    if (day == 0) {
        cols[5].textContent = "Sunday";
        return;
    }
    let secParam = (day - 1) * 10 + s;
    let hourParam = hours.indexOf(hour);
    if (minute < 30) hourParam -= 1;
    for (let i=0;i<9;i++) {
        cols[i].textContent = timings[i] + " | " + tt[secParam][i + 1];
        if (hourParam > i) cols[i].style.color = "green";
    }
    cols[hourParam].style.color = "rgb(43, 193, 243)";
    cols[hourParam].textContent = "➙  " + cols[hourParam].textContent;
}

setLabels(1);

const buttons = [];
for (let i=0;i<10;i++) {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode(tt[i][0]));
    input.appendChild(button);

    button.addEventListener('click', function() {
        section.textContent = tt[i][0];
        setLabels(i);
    })
}