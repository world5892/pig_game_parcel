'use strict';

const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const imgDiceEl = document.querySelector('.dice');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const totalScore0El = document.querySelector('#score--0');
const totalScore1El = document.querySelector('#score--1');
const playerSectionsEl = document.querySelectorAll('.player');

class View {
  addHandlerRollDice(handler) {
    btnRollEl.addEventListener('click', handler);
  }

  addHandlerHoldScore(handler) {
    btnHoldEl.addEventListener('click', handler);
  }

  addHandlerStartNewGame(handler) {
    btnNewEl.addEventListener('click', handler);
  }

  hideDice() {
    imgDiceEl.style.opacity = '0';
  }

  showDice() {
    imgDiceEl.style.opacity = '1';
  }

  displayNewRoll(roll) {
    const path = `dice-${roll}.png`;
    imgDiceEl.setAttribute('src', path);
  }

  displayCurrentScore(score, index) {
    document.querySelector(`#current--${index}`).textContent = score;
  }

  displayTotalScore(score, index) {
    document.querySelector(`#score--${index}`).textContent = score;
  }

  switchBackground(index) {
    // Reset background for both
    document.querySelectorAll('.player').forEach(section => section.classList.remove('player--active'));

    // Add background to active player
    document.querySelector(`.player--${index}`).classList.add('player--active');
  }

  _changeWinnerBackground(index) {
    document.querySelector(`.player--${index}`).classList.add('player--winner');
  }

  updateUIAfterWon(index) {
    this._changeWinnerBackground(index);

    // Disable ROLL and HOLD buttons
    this._toggleButtonsActivation(true);

    // Hide dice
    this.hideDice();
  }

  _toggleButtonsActivation(off) {
    btnRollEl.disabled = off;
    btnHoldEl.disabled = off;
  }

  resetUI() {
    // set scores as 0s
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    totalScore0El.textContent = 0;
    totalScore1El.textContent = 0;

    // set backgrounds as default
    playerSectionsEl.forEach(section => section.classList.remove('player--winner'));

    // Enable buttons
    this._toggleButtonsActivation(false);
  }
}

export default new View();