var React = require('react');

var HelloWorld = React.createClass({
  render: function () {
    return React.createElement('div', null, 'Hello World');
  }
});

React.render(React.createElement(HelloWorld), document.querySelector('#react-mount'));
