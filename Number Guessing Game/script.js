'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const button = document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // When there is not Input 
    if (!guess || guess < 0 || guess > 20) {
        document.querySelector('.message').textContent = '⛔ No Number!!';
    }

    // When Player Wins 🎉
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number ';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '20rem';
        document.querySelector('.number').innerHTML = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When Guess is Too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' 📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 You Lost the Game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#da0404ff';
            document.querySelector('h1').textContent = 'Try Again 😔';
        }

        // When Guess is Too Low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' 📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '😭 You Lost the Game';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#FF0000';
            document.querySelector('h1').textContent = 'Try Again 😔';
        }
    }

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('h1').textContent = 'Guess My Number!';
        document.querySelector('.score').textContent = '20';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
    })
});
