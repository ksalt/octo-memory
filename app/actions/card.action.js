'use strict';

var AppDispatcher = require('../dispatcher/app.dispatcher'),
  CardConstants = require('../constants/card.constants');

var ActionTypes = CardConstants.ActionTypes;

let CardActions = {

  flip(id, isFlipped) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.FLIP_CARD,
      id,
      isFlipped
    });
  },
  checkFlippedCards() {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.CHECK_FLIPPED_CARDS
    });
  }
};

module.exports = CardActions;