
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

const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");


const now = document.querySelector('input[value="now"]');
const full = document.querySelector('input[value="full"]');

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ist = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
// let hour = ist.getHours();
// let minute = ist.getMinutes();

let hour = 9;
let minute = 45;

if (minute >= 30) {
    col1.textContent = tt[ist.getDay()][hours.indexOf(hour)];
    col2.textContent = "NOW: \n tt[ist.getDay()][hours.indexOf(hour) + 1]";
    col3.textContent = "NOW: \n tt[ist.getDay()][hours.indexOf(hour) + 2]";
} else if (minute < 30 && hour == 8) {
    col2.textContent = "Good morning";
} else {
    col1.textContent = tt[ist.getDay()][hours.indexOf(hour) - 1];
    col2.textContent = tt[ist.getDay()][hours.indexOf(hour)];
    col3.textContent = tt[ist.getDay()][hours.indexOf(hour) + 1];
}

for (let i=0;i<radios.length;i++) {
    radios[i].addEventListener('change', function() {
        // day and section
        // time
        if (ist.getminute() >= 30) {
            console.log("greater than 30");
            col1.textContent = tt[ist.getDay() - 1 + i][hours.indexOf(hour)];
            col2.textContent = "NOW: \n tt[ist.getDay() - 1 + i][hours.indexOf(hour) + 1]";
            col3.textContent = tt[ist.getDay() - 1 + i][hours.indexOf(hour) + 2];
        } else if (ist.getminute() < 30 && hour == 8) {
            col2.textContent = "Good morning";
        } else {
            console.log("less than 30");
            col1.textContent = tt[ist.getDay() - 1 + i][hours.indexOf(hour) - 1];
            col2.textContent = "NOW: \n tt[ist.getDay() - 1 + i][hours.indexOf(hour)]";
            col3.textContent = tt[ist.getDay() - 1 + i][hours.indexOf(hour) + 1];
        }
    })
}