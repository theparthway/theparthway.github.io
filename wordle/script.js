const cells = document.querySelectorAll(".cell");
const label = document.querySelector(".label");
const btn = document.querySelector(".btn");
var labels = [];
var attempt = 1;
var currentCell = 0;
var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(word);
var inGame = true;
var correctColour = "limegreen";
var halfCorrectColour = "yellow";

btn.addEventListener('click', function () {
    location.reload();
})

document.addEventListener('keydown', (event) => {
    if(inGame){
        if (event.code == "Backspace" && currentCell > (attempt - 1) * 5) {
            labels[labels.length - 1].remove();
            labels.pop();
            currentCell -= 1;
            label.textContent = '';
        } else if (event.code == "Enter" && currentCell == attempt * 5) {
            
            checkWord();
        } else if (currentCell + 1 <= attempt * 5 && currentCell + 1 > (attempt - 1) * 5) {
            
            if (event.keyCode >= 97 && event.keyCode <= 122) {
                labels.push(document.createElement("Label"));
                labels[labels.length - 1].style.fontSize = "30px";
                labels[labels.length - 1].innerHTML = event.key.toUpperCase();
                cells[currentCell].appendChild(labels[labels.length - 1]);
                currentCell += 1;
            } else if(event.keyCode >= 65 && event.keyCode <= 90) {
                labels.push(document.createElement("Label"));
                labels[labels.length - 1].style.fontSize = "30px";
                labels[labels.length - 1].innerHTML = event.key.toUpperCase();
                cells[currentCell].appendChild(labels[labels.length - 1]);
                currentCell += 1;
            }
            
        }
    }
})

function checkWord() {
    let guess = '';
    for (let i=0;i<=4;i++) {
        let cellNumber = currentCell - (5 - i);
        guess += cells[cellNumber].textContent;
    }
    if (!words.includes(guess.toLowerCase())) {
        label.textContent = "Not a valid word";
        return;
    }
    let word1 = word;
    for(let i=0;i<=4;i++) {
        let cellNumber = currentCell - (5 - i);
        if (cells[cellNumber].textContent == word1[i]) {
            word1 = word1.substring(0, i) + ' ' + word1.substring(i + 1);
            cells[cellNumber].style.background = correctColour;
        }
    }
    for (let i=0;i<=4;i++) {
        let cellNumber = currentCell - (5 - i);
        for(let j=0;j<=4;j++) {
            if (word1[j] == cells[cellNumber].textContent) {
                cells[cellNumber].style.background = halfCorrectColour;
                word1 = word1.substring(0, j) + '.' + word1.substring(j + 1);
            }
        }
    }
    for (let i=0;i<=4;i++) {
        let cellNumber = currentCell - (5 - i);
        if (cells[cellNumber].style.background != correctColour && cells[cellNumber].style.background != halfCorrectColour) {
            cells[cellNumber].style.background = "grey";
        }
    }
    if (word1 == '     ') {
        label.textContent = "You Won!";
        inGame = false;
    } else if (attempt == 7) {
        label.textContent = "You Lost";
        inGame = false;
    }
    attempt += 1;
}