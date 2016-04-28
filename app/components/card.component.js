'use strict';

var React = require('react'),
  cn = require('classnames'),
  Icon = require('./shared/icon');

let Card = React.createClass({

  getDefaultProps() {
    return ({
      isFlipped: true
    });
  },

  render() {
    let cardClass = cn('card', {'card--flipped': this.props.isFlipped});
    return (
      <div className={cardClass} onClick={this.props.onClick.bind(null, this.props.id, this.props.isFlipped)}>
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

module.exports = Card;


