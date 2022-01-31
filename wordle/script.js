const cells = document.querySelectorAll(".cell");
const label = document.querySelector(".label");
const btn = document.querySelector(".btn");
const rem = document.querySelector(".remaining");
const buzzer = document.getElementById("buzzer");
const winner = document.getElementById("winner");
const type = document.getElementById("type");
var labels = [];
var attempt = 1;
var currentCell = 0;
var word = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(word);
var inGame = true;
var correctColour = "#6AAA64";
var halfCorrectColour = "#C9B458";
var incorrectColour = "#787C7E";
var remaining = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
rem.textContent = remaining;

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
            type.play();
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
        buzzer.play();
        return;
    }
    let word1 = word;
    for (let i=0;i<=4;i++) {
        let cellNumber = currentCell - (5 - i);
        let guessLetter = cells[cellNumber].textContent;
        let solutionLetter = word1[i];
        console.log(cellNumber + guessLetter + solutionLetter);
        if (guessLetter == solutionLetter) {
            word1 = word1.substring(0, i) + ' ' + word1.substring(i + 1);
            console.log(word1);
            cells[cellNumber].style.background = correctColour;
        } else if (word1.indexOf(guessLetter) != -1) {
            word1 = word1.substring(0, i) + '.' + word1.substring(i + 1);
            console.log(word1);
            cells[cellNumber].style.background = halfCorrectColour;
        } else {
            console.log("incorrect " + guessLetter);
            cells[cellNumber].style.background = incorrectColour;
            remaining = remaining.replace(cells[cellNumber].textContent, '');
            rem.textContent = remaining;
        }
    }

    if (word1 == '     ') {
        label.textContent = "You Won!";
        winner.play();
        inGame = false;
    } else if (attempt == 6) {
        label.textContent = "You Lost, the word was: " + word;
        inGame = false;
    }

    attempt += 1;
}