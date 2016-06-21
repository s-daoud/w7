const React = require('react');
const Minesweeper = require('../minesweeper');


const Tile = React.createClass({
  getInitialState() {
    return {status: "unrevealed"};
  },
  handleClick() {
    this.props.updateGame(this.props.tileObj, false);
    // debugger
    if (this.props.tileObj.bombed) {
      this.setState({status: "bomb"});
    } else if (this.props.tileObj.explored) {
      this.setState({status: "revealed"});
    } else if (this.props.tileObj.flagged) {
      this.setState({status: "flag"});
    }
  },
  render() {
    let mark = " ";
    let cName = "tile";
    // debugger
    if (this.state.status === "revealed") {
      mark = this.props.tileObj.adjacentBombCount().toString();
      cName += " revealed";
    } else if (this.state.status === "bomb") {
      mark = "\uD83D\uDCA3";
      cName += " bomb";
    } else if (this.state.status === "flag") {
      mark = "\u2691";
      cName += " flag";
    }
    return <div className={cName} onClick={this.handleClick}>{mark}</div>;
  }
});

module.exports = Tile;
