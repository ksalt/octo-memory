'use strict';

var React = require('react');

let Header = React.createClass({
  render() {
    return (
      <div className="header">
        <div className="header__title">Octo-Memory</div>
        <div className="header__settings">
          <svg className="icon" dangerouslySetInnerHTML={{__html: '<use xlink:href="#ic_settings_black_24px"></use>'}}/>
        </div>
      </div>
    );
  }
});

module.exports = Header;
