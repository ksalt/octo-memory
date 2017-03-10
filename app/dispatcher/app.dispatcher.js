'use strict';

import {Dispatcher} from 'flux';

export default new class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
}
