'use strict';

var React = require('react'),
  CardSection = require('./card-section.component'),
  Footer = require('./footer.component'),
  Header = require('./header.component');

var OctoMemory = React.createClass({
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

module.exports = OctoMemory;
