'use strict';

export const state = {};

export const setInitialData = function () {
  state.activePlayer = 0;
  state.currentRoll = null;
  state.currentScore = 0;
  state.players = [
    { name: 'player1', totalScore: 0, active: true },
    { name: 'player2', totalScore: 0, active: false }
  ];
  state.pointsToWin = 100;
}

export const generateRandomRoll = function () {
  // drawing a number between 1 and 6
  state.currentRoll = Math.floor(Math.random() * 6) + 1;
}

export const addToScore = function () {
  state.currentScore += state.currentRoll;
}

export const clearCurrentScore = function () {
  state.currentScore = 0;
}

export const switchPlayer = function () {
  // change active player
  state.players.forEach(player => player.active = !player.active);

  // change active player index
  state.activePlayer = state.players.findIndex(player => player.active === true);
}

export const addToTotalScore = function () {
  state.players[state.activePlayer].totalScore += state.currentScore;
}

const init = function () {
  setInitialData();
}

init();