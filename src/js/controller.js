'use strict';

import * as model from './model.js';
import view from './view';

const controllRollDice = function () {
  // displaying dice
  view.showDice();

  // generating random num
  model.generateRandomRoll();

  // display new roll
  view.displayNewRoll(model.state.currentRoll);

  if (model.state.currentRoll === 1) {
    // Reset current score
    model.clearCurrentScore();

    // Display current score
    view.displayCurrentScore(model.state.currentScore, model.state.activePlayer);

    // Switch player
    model.switchPlayer();

    // switch UI background
    view.switchBackground(model.state.activePlayer);
  } else {
    // Update current score
    model.addToScore();
  }

  // Display current score
  view.displayCurrentScore(model.state.currentScore, model.state.activePlayer);
}

const controlHoldScore = function () {
  // Update total score
  model.addToTotalScore();

  // Display total score
  view.displayTotalScore(model.state.players[model.state.activePlayer].totalScore, model.state.activePlayer);

  // Check if won
  if (model.state.players[model.state.activePlayer].totalScore >= model.state.pointsToWin) {
    view.updateUIAfterWon(model.state.activePlayer);

    return;
  }

  // Reset current score
  model.clearCurrentScore();

  // Display current score
  view.displayCurrentScore(model.state.currentScore, model.state.activePlayer);

  // Switch player
  model.switchPlayer();

  // Change background
  view.switchBackground(model.state.activePlayer);
}

const controlStartNewGame = function () {
  // Set initial game values in state
  model.setInitialData();

  // Resetting UI
  view.resetUI();
}

const init = function () {
  view.addHandlerRollDice(controllRollDice);
  view.addHandlerHoldScore(controlHoldScore);
  view.addHandlerStartNewGame(controlStartNewGame);
  view.hideDice();
}

init();