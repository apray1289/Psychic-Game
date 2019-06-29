var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"
    , "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var lettersGuessed = [];
var winsScore = 0;
var losesScore = 0;
var guessesDown = 9;
var whatIGuessed = document.getElementById("guess-list");

var losesCount = document.getElementById("loses");
var winsCount = document.getElementById("wins");
var guessesLeft = document.getElementById("guesses");
var runGame = function () { }
document.onkeyup = function (event) {
    var personGuess = event.key;

    var computerGuess = computerLetter[Math.floor(Math.random() * computerLetter.length)];

    if (personGuess === computerGuess) {
        winsScore++;
        winsCount.textContent = winsScore;
        lettersGuessed = [];
        document.getElementById("guess-list").innerHTML = lettersGuessed;
        guessesDown = 9;
        document.getElementById("guesses").innerHTML = guessesDown;

    } else {
        lettersGuessed.push(personGuess);
        var lettersList = lettersGuessed.toString();
        document.getElementById("guess-list").innerHTML = lettersList;
        guessesDown--;
        document.getElementById("guesses").innerHTML = guessesDown;
        if (guessesDown === 0) {
            losesScore++;
            losesCount.textContent = losesScore;
            lettersGuessed = [];
            document.getElementById("guess-list").innerHTML = lettersGuessed;
            guessesDown = 9;
            document.getElementById("guesses").innerHTML = guessesDown;
        }
    }

}

