// Create an array of Words
const answers = ['rogen', 'rock', 'leno', "o'brien", 'hart', 'colbert', 'spade'];
// Choose word randomly
let randNum = Math.floor(Math.random() * answers.length);
let chosenWord = answers[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess'); 
let docWrongGuess = document.getElementsByClassName('wrongGuess');



// Create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
};

console.log(generateUnderscore());
// Get users guess
document.addEventListener ('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    if(chosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        if(underScore.join('') == chosenWord) {
            alert('You Win!')
        }
    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
    }
});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');
