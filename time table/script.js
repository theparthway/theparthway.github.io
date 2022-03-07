
const radios = [];
radios.push(document.querySelector('input[value="A1"]'));
radios.push(document.querySelector('input[value="A2"]'));
radios.push(document.querySelector('input[value="A3"]'));
radios.push(document.querySelector('input[value="A4"]'));
radios.push(document.querySelector('input[value="A5"]'));
radios.push(document.querySelector('input[value="A6"]'));
radios.push(document.querySelector('input[value="A7"]'));
radios.push(document.querySelector('input[value="A8"]'));
radios.push(document.querySelector('input[value="A9"]'));
radios.push(document.querySelector('input[value="A10"]'));

const cols = [];

const container = document.querySelector(".container");

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
    // if (minute >= 30) {
    //     col1.textContent = timings[hourParam - 1] + " | \n" + tt[secParam][hourParam];
    //     col2.textContent = timings[hourParam] + " | \n" + tt[secParam][hourParam + 1];
    //     col3.textContent = timings[hourParam + 1] + " | \n" + tt[secParam][hourParam + 2];
    // } else if (minute < 30 && hour == 8) {
    //     col1.textContent = "Good morning!";
    //     col2.textContent = "Hope you have a nice day";
    //     col3.textContent = timings[hourParam] + " | \n" + tt[secParam][hourParam + 1];
    // } else {
    //     col1.textContent = timings[hourParam - 1] + " | \n" + tt[secParam][hourParam - 1];
    //     col2.textContent = timings[hourParam] + " | \n" + tt[secParam][hourParam];
    //     col3.textContent = timings[hourParam + 1] + " | \n" + tt[secParam][hourParam + 1];
    // }
}

setLabels(1);

for (let i=0;i<radios.length;i++) {
    radios[i].addEventListener('change', function() {
        // day and section
        // time
        setLabels(i);
    })
}
