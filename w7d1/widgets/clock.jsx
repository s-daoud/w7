const React = require('react');

const Clock = React.createClass({
  getInitialState() {
    return {date: new Date()};
  },
  componentDidMount() {
    const ticker = setInterval(this.tick, 1000);
  },
  tick(){
    this.state.date.setSeconds(this.state.date.getSeconds() + 1);
    this.setState({date: this.state.date});
  },
  componentWillUnmount() {
    clearInterval(this.ticker);
    this.ticker = 0;
  },
  render() {
    return(
      <h1>{this.state.date.toString()}</h1>
    );
  }
});

module.exports = Clock;
