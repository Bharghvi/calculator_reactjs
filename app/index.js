var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var arr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '=', 'Back', 'AC'];

ReactDOM.render(<App arr = {arr} />, document.getElementById('app'));

