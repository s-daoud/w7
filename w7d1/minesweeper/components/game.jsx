const React = require('react');
const Minesweeper = require('../minesweeper');
const Board = require('./board');


const Game = React.createClass({
  getInitialState() {
    return {board: new Minesweeper.Board(10, 10)};
  },
  updateGame(tile, flag) {
    // debugger
    if (flag) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  },
  render() {
    return <Board board={this.state.board} updateGame={this.updateGame} />;
  }
});

module.exports = Game;
