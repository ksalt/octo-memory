'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cn from 'classnames';
import Card from './card.component';
import CardActions from 'actions/card.action';
import CardStore from 'stores/card.store';

function getCardState () {
  return {
    cards: CardStore.getAll(),
    isStarted: CardStore.isGameStarted()
  }
}

export default React.createClass({
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

  onStart() {
    CardActions.startGame();
    setTimeout(CardActions.flipAllCards, 15000);
  },

  render() {
    const transitionOpts = {
        //transitionEnter: false,
        transitionEnterTimeout: 600,
        transitionLeaveTimeout: 600,
        component: "div",
        transitionName: {
          enter: 'enter',
          enterActive: 'enter--active',
          leave: 'leave',
          leaveActive: 'leave--active'
        }
      },
      containerClass = cn('card-container', {'card-container--not-started': !this.state.isStarted});

    const cards = this.state.cards.map((card, i) => {
      return (<Card {...card} onClick={this.flipCard} onFlipEnd={this.onFlipEnd} key={i}/>)
    });
    return (
      <ReactCSSTransitionGroup className={containerClass} {...transitionOpts}>
        {this.state.isStarted ? cards : this.showStartButton()}
      </ReactCSSTransitionGroup>
    );
  },

  showStartButton() {
    return (<div className="start-button" onClick={this.onStart}>Start</div>);
  }
});

