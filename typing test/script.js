const typingDiv = document.getElementById("typing");
const stats = document.getElementById("stats");
const btn = document.getElementById("btn");
const hardMode = document.getElementById("hardMode");
const liveWpm = document.getElementById("liveWpm");
const liveMistakes = document.getElementById("liveMistakes");

let  numberOfWords = 0;
let mistakes = 0;
let numberOfChars = 0;
let text = "";

for (let i=0;i<10;i++) {
    text += words[Math.floor(Math.random() * words.length)];
    text += " ";
}

text = text.slice(0, -1);

async function getData() {
    await fetch('https://random-word-api.herokuapp.com/word?number=10')
.then(response => response.json())
.then(data => {
    text = data.join(" ")
    console.log(words);
});
}

const characters = text.split('').map(char => {
    const span = document.createElement("span");
    span.innerText = char;
    typingDiv.appendChild(span);
    numberOfChars++;
    return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add('cursor');

let startTime = null;
let endTime = null;


const keyListener = document.addEventListener('keydown', ({ key, keyCode }) =>{
    console.log(key);
    if (key == "Enter") {
        window.location.reload();
        return;
    }
    if (!((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || keyCode == 32 || keyCode == 45)) return;
    if (!startTime) {
        startTime = new Date();
    }
    if (key === cursorCharacter.innerText) {
        // correct key
        cursorCharacter.classList.remove('cursor');
        cursorCharacter.classList.add('done');
        cursorCharacter = characters[++cursorIndex];
    } else {
        cursorCharacter.style.color = "red";
        mistakes++;
    }
    if (cursorIndex >= characters.length) {
        endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        console.log("number of words" + numberOfWords);
        const wps = numberOfWords / seconds;
        const wpm = wps * 60;
        console.log(mistakes);
        console.log(numberOfChars);
        stats.innerText = `WPM: ${wpm.toFixed(2)}\nAccuracy: ${(100 - (mistakes / numberOfChars)).toFixed(2)} % \n Try Again ↩`;
        stats.style.color = "white";
        stats.style.paddingTop = "5%";
        stats.style.fontSize = "x-large";
        document.removeEventListener('keydown', keyListener);
        return;
    }
    
    cursorCharacter.classList.add("cursor");
})

btn.addEventListener('click', () => {
    window.location.reload();
})