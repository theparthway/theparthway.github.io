
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
console.log(hour);
console.log(minute);
console.log(day);

if (minute >= 30) {
    col1.textContent = "BEFORE: \n" + tt[(day - 1) * 10 + 1][hours.indexOf(hour)];
    col2.textContent = "NOW: \n" + tt[(day - 1) * 10 + 1][hours.indexOf(hour) + 1];
    col3.textContent = "NEXT: \n" + tt[(day - 1) * 10 + 1][hours.indexOf(hour) + 2];
} else if (minute < 30 && hour == 8) {
    col2.textContent = "Good morning";
} else {
    col1.textContent = "BEFORE: \n" + tt[(day - 1) * 10 + 1][hours.indexOf(hour) - 1];
    col2.textContent = "NOW: \n" + tt[(day - 1) * 10 + 1][hours.indexOf(hour)];
    col3.textContent = "NEXT: \n" + tt[(day - 1) * 10 + 1][hours.indexOf(hour) + 1];
}

for (let i=0;i<radios.length;i++) {
    radios[i].addEventListener('change', function() {
        // day and section
        // time
        if (minute >= 30) {
            console.log("greater than 30");
            col1.textContent = "BEFORE: \n" + tt[(day - 1) * 10 + i][hours.indexOf(hour)];
            col2.textContent = "NOW: \n" + tt[(day - 1) * 10 + i][hours.indexOf(hour) + 1];
            col3.textContent = "NEXT: \n" + tt[(day - 1) * 10 + i][hours.indexOf(hour) + 2];
        } else if (minute < 30 && hour == 8) {
            col2.textContent = "Good morning";
        } else {
            console.log("less than 30");
            col1.textContent = "BEFORE: \n" + tt[(day - 1) * 10 + i][hours.indexOf(hour) - 1];
            col2.textContent = "NOW: \n" + tt[(day - 1) * 10 + i][hours.indexOf(hour)];
            col3.textContent = "NEXT: \n" + tt[(day - 1) * 10 + i][hours.indexOf(hour) + 1];
        }
    })
}
