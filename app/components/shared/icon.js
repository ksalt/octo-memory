'use strict';

var React = require('react'),
  cn = require('classnames');

let Icon = React.createClass({
  getDefaultProps() {
    return ({
      width: 18,
      height: 18
    });
  },

  render() {
    let iconClass = cn('icon', this.props.customClass),
      styles = {
        width: this.props.width + "px",
        height: this.props.height + "px"
      };
    return (
      <svg className={iconClass}
           style={styles}
           dangerouslySetInnerHTML={{__html: '<use xlink:href="#' + this.props.icon + '"></use>'}}
      >
      </svg>
    );
  }
});

module.exports = Icon;



