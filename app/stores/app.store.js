'use strict';

import AppDispatcher from 'dispatcher/app.dispatcher';
import { EventEmitter } from 'events';
import AppConstants from 'constants/app.constants';
const ActionTypes = AppConstants.ActionTypes;

let _modalType = null;
let _cardNumber = 8;
let _cardCategory = "animals";

class AppStore extends EventEmitter {
  getModalType() {
    return _modalType;
  }

  getCardNumber() {
    return _cardNumber;
  }

  getCardCategory() {
    return _cardCategory;
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

const appStore = new AppStore();

AppDispatcher.register(payload => {
  const action = payload.action;

  switch(action.actionType) {
    case ActionTypes.SHOW_MODAL:
      _modalType = action.modalType;
      appStore.emitChange();
      break;

    case ActionTypes.SET_SETTINGS:
      _cardCategory = action.cardCategory;
      _cardNumber = action.cardNumber;
      appStore.emitChange();
      break;
  }
});

export default appStore;