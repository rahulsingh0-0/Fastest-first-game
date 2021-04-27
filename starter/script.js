'use strict';
// selecting elements
const ScoreOfPlayer1 = document.querySelector('#score--0');
const ScoreOfPlayer2 = document.querySelector('#score--1');
const DiceRollBtn = document.querySelector('.btn--roll');
const DiceNewBtn = document.querySelector('.btn--new');
const DiceHoldBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let currentScore1 = document.querySelector('#current--0');
let currentScore2 = document.querySelector('#current--1');
ScoreOfPlayer1.textContent = 0;
ScoreOfPlayer2.textContent = 0;
diceImg.classList.add('hidden');
let activePlayer = 0;
let currentScore = 0;
let playing = true;
let scores = [0, 0];
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
// rolling a dice
DiceRollBtn.addEventListener('click', function () {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
DiceHoldBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
DiceNewBtn.addEventListener('click', function () {
  ScoreOfPlayer1.textContent = 0;
  ScoreOfPlayer2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
  player1.classList.add('player--active');
  diceImg.classList.add('hidden');
  player2.classList.remove('player--active');
});
