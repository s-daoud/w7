const React = require('react');
const Minesweeper = require('../minesweeper');
const Tile = require('./tile');


const Board = React.createClass({
  render() {
    // debugger
    let rows = this.props.board.grid.map( (row, i) => {
      return row.map( (tile, j) => {
        let keyVar = [i, j];
        return <Tile tileObj={this.props.board.grid[i][j]} updateGame={this.props.updateGame} key={keyVar}/>;
      });
    });

    let betterRows = rows.map( row => {
      return <div className="row">{row}</div>;
    });

    return (
      <div>
        {betterRows}
      </div>
    );
  }
});

module.exports = Board;
