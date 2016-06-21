const React = require('react');
const ReactDOM = require('react-dom');
const Minesweeper = require('./minesweeper');
const Tile = require('./components/tile');
const Board = require('./components/board');
const Game = require('./components/game');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Game />, document.getElementById('minesweeper'));
});
