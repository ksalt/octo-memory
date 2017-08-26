'use strict';

import React from 'react';
import Icon from './shared/icon';
import AppActions from 'actions/app.action';

export default React.createClass({
  showSettings() {
    AppActions.showSettingsModal();
  },

  render() {
    return (
      <div className="header">
        <div className="header__title">Octo-Memory</div>
        <div className="header__settings" onClick={this.showSettings}>
          <Icon width="32" height="32" icon="settings" />
        </div>
      </div>
    );
  }
});