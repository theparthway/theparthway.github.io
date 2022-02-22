const typingDiv = document.getElementById("typing");
const stats = document.getElementById("stats");
const btn = document.getElementById("btn");
// let words;

// async function getData() {
//     await fetch('https://random-word-api.herokuapp.com/word?number=10')
//   .then(response => response.json())
//   .then(data => {
//       words = data.join(" ")
//       console.log(words);
//   });
// }

// getData();
let  numberOfWords = 0;
let text = "";
for (let i=0;i<10;i++) {
    text += words[Math.floor(Math.random() * words.length)];
    text += " ";
    numberOfWords++;

}
text = text.slice(0, -1);

const characters = text.split('').map(char => {
    const span = document.createElement("span");
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add('cursor');

let startTime = null;
let endTime = null;

const keyListener = document.addEventListener('keydown', ({ key }) =>{
    console.log(key);
    if (key == "Enter") {
        window.location.reload();
        return;
    }
    if (!startTime) {
        startTime = new Date();
    }
    if (key === cursorCharacter.innerText) {
        // correct key
        cursorCharacter.classList.remove('cursor');
        cursorCharacter.classList.add('done');
        cursorCharacter = characters[++cursorIndex];
    }
    if (cursorIndex >= characters.length) {
        endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        console.log("number of words" + numberOfWords);
        const wps = numberOfWords / seconds;
        const wpm = wps * 60;
        console.log(wpm);
        stats.innerText = `WPM: ${wpm}`;
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