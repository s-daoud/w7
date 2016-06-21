const React = require('react');
const ReactDOM = require('react-dom');
const Widget = require('./widget');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widget />, document.getElementById('widget'));
});
