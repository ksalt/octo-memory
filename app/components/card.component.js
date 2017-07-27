'use strict';

import React from 'react';
import cn from 'classnames';
import Icon from './shared/icon';

export default React.createClass({

  getDefaultProps() {
    return ({
      isFlipped: false
    });
  },

  componentDidMount() {
    this.card.addEventListener('transitionend', this.props.onFlipEnd);
  },

  componentWillUnmount() {
    this.card.removeEventListener('transitionend', this.props.onFlipEnd);
  },

  render() {
    let cardClass = cn('card', {'card--flipped': this.props.isFlipped, 'card--hidden': this.props.hidden});
    return (
      <div className={cardClass} ref={(r) => this.card = r} onClick={() => this.props.onClick(this.props.id, this.props.isFlipped)}>
        <div className="card__front">
          <div className="card__icon-container">
            <Icon width="65" height="65" icon={this.props.icon}/>
          </div>
          <div className="card__text">{this.props.text}</div>
        </div>
        <div className="card__back">
          <div className="card__text card__text--back-side">Octo-memory</div>
        </div>
      </div>
    );
  }
});