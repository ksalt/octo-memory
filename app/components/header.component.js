'use strict';

import React from 'react';
import Icon from './shared/icon';

export default React.createClass({
  render() {
    return (
      <div className="header">
        <div className="header__title">Octo-Memory</div>
        <div className="header__settings">
          <Icon width="32" height="32" icon="ic_settings_black_24px" />
        </div>
      </div>
    );
  }
});