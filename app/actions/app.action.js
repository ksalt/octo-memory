'use strict';

import AppDispatcher from '../dispatcher/app.dispatcher';
import AppConstants from '../constants/app.constants';

const ActionTypes = AppConstants.ActionTypes;

export default {

  showSettingsModal() {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.SHOW_MODAL,
      modalType: 'settings'
    });
  },

  closeModal() {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.SHOW_MODAL,
      modalType: null
    });
  },

  setSettings({cardCategory, cardNumber}) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.SET_SETTINGS,
      cardCategory,
      cardNumber
    });
  }
};
