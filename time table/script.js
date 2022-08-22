const container = document.querySelector(".container");
const sectionButtons = document.querySelector(".section");
const dayButtons = document.querySelector(".day");
const yearButtons = document.querySelector(".year");

const cols = [];


for (let i=0;i<10;i++) {
    let cell = document.createElement("div");
    cols.push(cell);
    container.appendChild(cell);
}

const timings = ['8:25-9:20', '9:25-10:20', '10:35-11:30', '11:35-12:30', '12:35-1:30', '1:35-2:30', '2:35-3:30', '3:35-4:30', '4:35-5:30', '5:35-6:30'];
const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const meals = ["Breakfast", "Lunch", "Dinner", "Snacks"];

var currentTime = new Date();

var currentOffset = currentTime.getTimezoneOffset();

var ISTOffset = 330;   // IST offset UTC +5:30 

var ist = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
// let hour = ist.getHours();
// let minute = ist.getMinutes();

let hour = ist.getHours();
let minute = ist.getMinutes();
let day = ist.getDay();
let tt;
let year = 0;
let section = 2;
let isMess = false;
let noOfSections = 14;
const section_buttons = [];

function setLabels() {
    if (!isMess) {
        if (year == 0) {
            tt = tt1;
            noOfSections = 14;
            if (section_buttons.length != 0) section_buttons[13].style.visibility = "hidden";
        }
        else { 
            tt = tt2; 
            noOfSections = 11; 
            if (section_buttons.length != 0) section_buttons[10].style.visibility = "visible";
        }
        if (section_buttons.length != 0) {
            for (let i=0;i<section_buttons.length;i++) {
                section_buttons[i].textContent = tt[i][0];
            }
        }
        if (day == 0) {
            cols[5].textContent = "Sunday";
            return;
        }
        let secParam = (day - 1) * noOfSections + section;
        let hourParam = hours.indexOf(hour);
        if (minute < 30 && hourParam != -1) hourParam -= 1;
        for (let i=0;i<10;i++) {
            cols[i].textContent = timings[i] + " | " + tt[secParam][i + 1];
            if (hourParam > i) cols[i].style.color = "#2EB086";
        }
        if ((hour == 18 && minute > 30) || (hour == 8 && minute < 30)) return;
        if (hourParam != -1 && day == ist.getDay()) {
            cols[hourParam].style.color = "#B8405E";
            cols[hourParam].textContent = "➙  " + cols[hourParam].textContent;
        }
        if (day != ist.getDay()) {
            for (let i=0;i<9;i++) {
                cols[i].style.color = "#313552";
            }
        }
    } else {
        container.style.height = "95vh";
        for (let i=0;i<4;i++) {
            cols[i].textContent = "";
            cols[i].textContent += meals[i];
            cols[i].textContent += "➙  ";
            for (let j=0;j<12;j++) {
                if (mess[(day - 1) * noOfSections + j][i]){
                    cols[i].textContent += mess[(day - 1) * noOfSections + j][i];
                    cols[i].textContent += ", ";
                }
            }
        }
        for (let i=4;i<9;i++) {
            cols[i].textContent = "";
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

const year_buttons = [];
let oneButton = document.createElement("button");
year_buttons.push(oneButton);
oneButton.appendChild(document.createTextNode("2nd Year"));
yearButtons.appendChild(oneButton);
oneButton.addEventListener('click', function() {
    changeButton(year_buttons[year], oneButton);
    year = 0;
    isMess = false;
    setLabels();
});
// let twoButton = document.createElement("button");
// year_buttons.push(twoButton);
// twoButton.appendChild(document.createTextNode("2nd Year"));
// yearButtons.appendChild(twoButton);
// twoButton.addEventListener('click', function() {
//     changeButton(year_buttons[year], twoButton);
//     year = 1;
//     isMess = false;
//     setLabels();
// });
// let messButton = document.createElement("button");
// year_buttons.push(messButton);
// messButton.appendChild(document.createTextNode("MESS"));
// yearButtons.appendChild(messButton);
// messButton.addEventListener('click', function() {
//     changeButton(year_buttons[year], messButton);
//     year = 2;
//     isMess = true;
//     setLabels();
// });

for (let i=0;i<14;i++) {
    let button = document.createElement("button");
    section_buttons.push(button);
    button.appendChild(document.createTextNode(tt[i][0]));
    sectionButtons.appendChild(button);
    
    button.addEventListener('click', function() {
        // info.textContent = tt[i][0] + " | " + (days[day]).toUpperCase();
        changeButton(section_buttons[section], button);
        section = i;
        isMess = false;
        setLabels();
    });
}

setLabels();

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
changeButton(null, year_buttons[year]);
