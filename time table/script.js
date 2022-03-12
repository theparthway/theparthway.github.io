const container = document.querySelector(".container");
const sectionButtons = document.querySelector(".section");
const dayButtons = document.querySelector(".day");

const cols = [];


for (let i=0;i<9;i++) {
    let cell = document.createElement("div");
    cols.push(cell);
    container.appendChild(cell);
}

const timings = ['8:25-9:20', '9:25-10:20', '10:35-11:30', '11:35-12:30', '12:35-1:30', '1:35-2:30', '2:35-3:30', '3:35-4:30', '4:35-5:30'];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ist = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
// let hour = ist.getHours();
// let minute = ist.getMinutes();

let hour = ist.getHours();
let minute = ist.getMinutes();
let day = ist.getDay();
let section = 1;

function setLabels() {
    if (day == 0) {
        cols[5].textContent = "Sunday";
        return;
    }
    let secParam = (day - 1) * 10 + section;
    let hourParam = hours.indexOf(hour);
    if (minute < 30 && hourParam != -1) hourParam -= 1;
    for (let i=0;i<9;i++) {
        cols[i].textContent = timings[i] + " | " + tt[secParam][i + 1];
        if (hourParam > i) cols[i].style.color = "#2EB086";
    }
    if ((hour == 17 && minute > 30) || (hour == 8 && minute < 30)) return;
    if (hourParam != -1) {
        cols[hourParam].style.color = "#B8405E";
        cols[hourParam].textContent = "➙  " + cols[hourParam].textContent;
    }
    if (day != ist.getDay()) {
        for (let i=0;i<9;i++) {
            cols[i].style.color = "#313552";
        }
    }
}

function changeButton(old_button, new_button) {
    // console.log("old: " + old_button.textContent);
    // console.log("new: " + new_button.textContent);
    if (old_button) {
        old_button.style.color = "#EEE6CE";
        old_button.style.backgroundColor = "#B8405E";
    }
    new_button.style.color = "#B8405E";
    new_button.style.backgroundColor = "#EEE6CE";
}

setLabels();

// info.textContent = "A2 | " + (days[day]).toUpperCase();

const section_buttons = [];
for (let i=0;i<10;i++) {
    let button = document.createElement("button");
    section_buttons.push(button);
    button.appendChild(document.createTextNode(tt[i][0]));
    sectionButtons.appendChild(button);

    button.addEventListener('click', function() {
        // info.textContent = tt[i][0] + " | " + (days[day]).toUpperCase();
        changeButton(section_buttons[section], button);
        section = i;
        setLabels();
    });

}

const day_buttons = [];
for (let i=1;i<7;i++) {
    let button = document.createElement("button");
    day_buttons.push(button);
    button.appendChild(document.createTextNode(days[i]));
    dayButtons.appendChild(button);

    button.addEventListener('click', function() {
        changeButton(day_buttons[day - 1], button);
        day = i;
        // info.textContent = tt[section][0] + " | " + (days[day]).toUpperCase();
        setLabels()
    })
}

changeButton(null, section_buttons[1]);
changeButton(null, day_buttons[day - 1]);