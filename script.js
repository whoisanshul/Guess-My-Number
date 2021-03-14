'use strict';

let actualNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const gussedNumber = Number(document.querySelector('.guess').value);
  //console.log(gussedNumber);

  if (score > 0) {
    if (!gussedNumber) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (gussedNumber === actualNumber) {
      document.querySelector('.message').textContent = 'YOU WON! :D';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = actualNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (gussedNumber > actualNumber) {
      document.querySelector('.message').textContent = 'TOO HIGH! :(';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (gussedNumber < actualNumber) {
      document.querySelector('.message').textContent = 'TOO LOW! :(';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent =
      'Sorry. You lost. Try again! :(';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
  actualNumber = Math.trunc(Math.random() * 20) + 1;
});
