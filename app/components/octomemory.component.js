'use strict';

import React from 'react';
import CardSection from './card-section.component';
import Footer from './footer.component';
import Header from './header.component';

export default React.createClass({
  render() {
    return (
      <div className="main-app">
        <Header />
        <CardSection/>
        <Footer/>
      </div>
    );
  }
});