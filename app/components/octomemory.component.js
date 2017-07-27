'use strict';

import React from 'react';
import CardSection from './card-section.component';
import Footer from './footer.component';
import Header from './header.component';
import Settings from './settings.component';
import AppStore from 'stores/app.store';

const getAppState = () => {
  return {modalType: AppStore.getModalType()}
};

export default React.createClass({
  getInitialState() {
    return getAppState();
  },

  componentDidMount() {
    AppStore.addChangeListener(this._handleChange);
  },

  componentWillUnmount() {
    AppStore.removeChangeListener(this._handleChange);
  },

  _handleChange() {
    this.setState(getAppState());
  },

  render() {
    return (
      <div className="main-app">
        <Header />
        <CardSection/>
        <Footer/>
        <div id="modal">{this.renderModal()}</div>
      </div>
    );
  },

  renderModal() {
    switch(this.state.modalType) {
      case 'settings':
        return <Settings />;
        break;
    }
  }
});