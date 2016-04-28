'use strict';

var AppDispatcher = require('../dispatcher/app.dispatcher'),
  EventEmitter = require('events').EventEmitter,
  CardConstants = require('../constants/card.constants'),
  _ = require('underscore'),
  animals = require('../animals'),
  _cards = getCards();

var ActionTypes = CardConstants.ActionTypes;

function getCards () {
  var cards = [];
  animals.forEach((animal) => {
    cards.push({id: _.uniqueId(), text: animal.name, icon: animal.icon});
    cards.push({id: _.uniqueId(), text: animal.name, icon: animal.icon});
  });
  return (_.shuffle(cards));
}

function flip (id, isFlipped) {
  let card = _.findWhere(_cards, {id});
  card.isFlipped = isFlipped;
}


class CardStore extends EventEmitter {
  getAll() {
    return _cards;
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

var cardStore = new CardStore();

AppDispatcher.register(function (payload) {
  var action = payload.action;

  switch(action.actionType) {
    case ActionTypes.FLIP_CARD:
      flip(action.id, action.isFlipped);
      cardStore.emitChange();
      break;
  }
});

module.exports = cardStore;
