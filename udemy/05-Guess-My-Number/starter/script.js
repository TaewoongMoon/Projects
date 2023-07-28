'use strict';

// console.log(
//   document.querySelector('input').addEventListener('input', event => {
//     console.log(event.target.value);
//   })
// );

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', () => {
  const inputValue = Number(document.querySelector('.guess').value);
  console.log(inputValue, typeof inputValue);
  if (!inputValue) {
    document.querySelector('.message').textContent = 'No Number 🛑';
  } else if (inputValue > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (inputValue < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (inputValue === randomNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  }
});
