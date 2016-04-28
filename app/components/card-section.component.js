'use strict';

var React = require('react'),
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

  render() {
    var cards = this.state.cards.map((card, i) => {
      return (<Card {...card} onClick={this.flipCard} key={i}/>)
    });
    return (
      <div className="card-container">{cards}</div>
    );
  }
});

module.exports = CardSection;

