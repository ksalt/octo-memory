'use strict';

import AppDispatcher from '../dispatcher/app.dispatcher';
import CardConstants from '../constants/card.constants';

const ActionTypes = CardConstants.ActionTypes;

export default {

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
  },
  startGame() {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.START_GAME
    });
  },
  flipAllCards() {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.FLIP_ALL_CARDS
    });
  }
};
