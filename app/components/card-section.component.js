'use strict';

var React = require('react'),
  ReactCSSTransitionGroup = require('react-addons-css-transition-group'), // ToDo: remove if not needed
  Card = require('./card.component'),
  CardActions = require('../actions/card.action'),
  CardStore = require('../stores/card.store');

function getCardState () {
  return {
    cards: CardStore.getAll()
  }
}

let CardSection = React.createClass({
  getInitialState() {
    return getCardState();
  },

  componentDidMount() {
    CardStore.addChangeListener(this._handleChange);
  },

  componentWillUnmount() {
    CardStore.removeChangeListener(this._handleChange);
  },

  _handleChange() {
    this.setState(getCardState());
  },

  flipCard(id, isFlipped) {
    CardActions.flip(id, !isFlipped);
  },

  onFlipEnd() {
    CardActions.checkFlippedCards();
  },

  render() {
    let transitionOpts = {
      transitionEnter: false,
      transitionLeaveTimeout: 600,
      component: "div",
      transitionName: {
        leave: 'leave',
        leaveActive: 'leave--active'
      }
    };
    var cards = this.state.cards.map((card, i) => {
      return (<Card {...card} onClick={this.flipCard} onFlipEnd={this.onFlipEnd} key={i}/>)
    });
    return (
      <ReactCSSTransitionGroup className="card-container" {...transitionOpts}>{cards}</ReactCSSTransitionGroup>
    );
  }
});

module.exports = CardSection;

