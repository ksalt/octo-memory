'use strict';

import AppDispatcher from 'dispatcher/app.dispatcher';
import { EventEmitter } from 'events';
import CardConstants from 'constants/card.constants';
import AppStore from './app.store';
import _ from 'underscore';
import animals from 'animals';
const ActionTypes = CardConstants.ActionTypes;
const categories = {animals};

const getCards = () => {
  const cards = [];
  _.shuffle(categories[AppStore.getCardCategory()]).slice(0, AppStore.getCardNumber()/2).forEach(animal => {
    //ToDo: this will be improved after language selection is added
    cards.push({id: _.uniqueId(), text: animal.name, icon: animal.icon, hidden: false});
    cards.push({id: _.uniqueId(), text: animal.name, icon: animal.icon, hidden: false});
  });
  return (_.shuffle(cards));
};

const flip = (id, isFlipped) => {
  let card = _.findWhere(_cards, {id});
  card.isFlipped = isFlipped;
};

const checkFlippedCards = () => {
  const flippedCards = _.where(_cards, {isFlipped: false, hidden: false});
  if (flippedCards.length !== 2) {
    return;
  }
  if (flippedCards[0].icon === flippedCards[1].icon) {
    flippedCards.forEach((card) => {
      card.hidden = true;
    })
  } else {
    flippedCards.forEach((card) => {
      card.isFlipped = true;
    })
  }
  if (_.where(_cards, {hidden: true}).length === _cards.length) {
    _isGameFinished = true;
    _isGameStarted = false;
  }
};

const startGame = () => {
  _cards = getCards();
  _isGameStarted = true;
};

const flipAllCards = () => {
  _cards.forEach((card) => {
    card.isFlipped = true;
  })
};

let _cards = getCards();
let _isGameStarted;
let _isGameFinished;

class CardStore extends EventEmitter {
  getAll() {
    return _cards;
  }

  isGameStarted() {
    return _isGameStarted;
  }

  isGameFinished() {
    return _isGameFinished;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback)
  }

  removeChangeListener(callback) {
    this.off('change', callback)
  }
}

const cardStore = new CardStore();

AppDispatcher.register(payload => {
  const action = payload.action;

  switch(action.actionType) {
    case ActionTypes.FLIP_CARD:
      flip(action.id, action.isFlipped);
      cardStore.emitChange();
      break;
    case ActionTypes.CHECK_FLIPPED_CARDS:
      checkFlippedCards();
      cardStore.emitChange();
      break;
    case ActionTypes.START_GAME:
      startGame();
      cardStore.emitChange();
      break;
    case ActionTypes.FLIP_ALL_CARDS:
      flipAllCards();
      cardStore.emitChange();
      break;
  }
});

export default cardStore;