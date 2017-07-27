'use strict';

import React from 'react';
import Icon from './shared/icon';
import AppActions from 'actions/app.action';
import CardActions from 'actions/card.action';
import AppStore from 'stores/app.store';

const getSettings = () => {
  return {
    cardNumber: AppStore.getCardNumber(),
    cardCategory: AppStore.getCardCategory()
  };
};

export default React.createClass({
  getInitialState() {
    return getSettings();
  },

  closeSettings() {
    AppActions.closeModal();
  },

  onSubmit() {
    AppActions.setSettings(this.state);
    AppActions.closeModal();
    CardActions.startGame();
    setTimeout(CardActions.flipAllCards, 15000);
  },

  render() {
    return (
      <div className="modal__overlay settings">
        <div className="modal__container modal__container--settings">
          <div className="modal-header">
            <div className="modal-header__title">Settings</div>
            <div className="modal-header__close">
              <Icon width="24" height="24" icon="ic_close_black_24px" onClick={this.closeSettings}/>
            </div>
          </div>
          <div className="modal__content modal__content--settings">
            <div className="settings-select settings-select--category">
              <div className="settings-select__label">Category</div>
              <div className="settings-select__label settings-select__label--divide"></div>
              <div className="settings-select__select-container">
                <select className="settings-select__select"
                        value={this.state.cardCategory}
                        onChange={(e) => this.setState({cardCategory: e.target.value})}>
                  <option value="animals">Animals</option>
                  <option value="animals2">Animals2</option>
                  <option value="animals3">Animals3</option>
                </select>
              </div>
            </div>
            <div className="settings-select settings-select--cards-number">
              <div className="settings-select__label">Number of cards</div>
              <div className="settings-select__label settings-select__label--divide"></div>
              <div className="settings-select__select-container">
                <select className="settings-select__select"
                        value={this.state.cardNumber}
                        onChange={(e) => this.setState({cardNumber: e.target.value})}>
                  <option value="8">8</option>
                  <option value="16">16</option>
                  <option value="32">32</option>
                </select>
              </div>
            </div>
            <div className="settings-select settings-select--language">
              <div className="settings-select__label">Language</div>
              <div className="settings-select__label settings-select__label--divide">from</div>
              <div className="settings-select__select-container">
                <select className="settings-select__select">
                  <option value="eng">English</option>
                  <option value="ukr">Ukrainian</option>
                  <option value="rus">Russian</option>
                  <option value="ger">German</option>
                </select>
              </div>
            </div>
            <div className="settings-select settings-select--language">
              <div className="settings-select__label"></div>
              <div className="settings-select__label settings-select__label--divide">to</div>
              <div className="settings-select__select-container">
                <select className="settings-select__select">
                  <option value="eng">English</option>
                  <option value="ukr">Ukrainian</option>
                  <option value="rus">Russian</option>
                  <option value="ger">German</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal-footer__btn modal-footer__btn--cancel" onClick={this.closeSettings}>Cancel</div>
            <div className="modal-footer__btn modal-footer__btn--submit" onClick={this.onSubmit}>OK</div>
          </div>
        </div>
      </div>
    );
  }
});