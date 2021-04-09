'use strict';

//Variables

let currentScore = 0;
const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let p1Score = document.getElementById('score--0');
let p2Score = document.getElementById('score--1');
let p1Current = document.getElementById('current--0');
let p2Current = document.getElementById('current--1');
const p1Active = document.querySelector('.player--0');
const p2Active = document.querySelector('.player--1');
const dice = document.querySelector('.dice');

const dicePictures = [
  'dice-1.png',
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
];

//Function for generating random number
const diceRoll = function () {
  const randomNumber = Number(Math.floor(Math.random() * (6 - 1 + 1) + 1));
  console.log(randomNumber);
  dice.src = dicePictures[randomNumber - 1];
  if (randomNumber === 1 && p1Active.classList.contains('player--active')) {
    p1Active.classList.remove('player--active');
    p2Active.classList.add('player--active');
    p1Current.textContent = 0;
  } else if (
    randomNumber === 1 &&
    p2Active.classList.contains('player--active')
  ) {
    p2Active.classList.remove('player--active');
    p1Active.classList.add('player--active');
    p2Current.textContent = 0;
  }

  if (p1Active.classList.contains('player--active') && randomNumber !== 1) {
    p1Current.textContent =
      Number(p1Current.textContent) + Number(randomNumber);
    btnHold.addEventListener('click', function () {
      p1Score.textContent =
        Number(p1Current.textContent) + Number(p1Score.textContent);
      p1Active.classList.remove('player--active');
      p2Active.classList.add('player--active');
      p1Current.textContent = 0;
    });
  } else if (
    p2Active.classList.contains('player--active') &&
    randomNumber !== 1
  ) {
    p2Current.textContent =
      Number(p2Current.textContent) + Number(randomNumber);
    btnHold.addEventListener('click', function () {
      p2Score.textContent =
        Number(p2Current.textContent) + Number(p2Score.textContent);
      p2Active.classList.remove('player--active');
      p1Active.classList.add('player--active');
      p2Current.textContent = 0;
    });
  }
};

//Function for generating new Game
const newGame = function () {
  console.log('New game button clicked.');
  p1Score.textContent = 0;
  p2Score.textContent = 0;
  p1Current.textContent = 0;
  p2Current.textContent = 0;
  if (p2Active.classList.contains('player--active')) {
    p2Active.classList.remove('player--active');
    p1Active.classList.add('player--active');
  }
};

//Function for hold score
// const hold = function () {
//   console.log('');
// };

//Functions for buttons clicks
btnRollDice.addEventListener('click', diceRoll);
btnNewGame.addEventListener('click', newGame);
// btnHold.addEventListener('click', hold);
