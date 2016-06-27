const React = require('react');

const BenchIndexItem = React.createClass({
  render(){
    return (
      <div>
        Bench: {this.props.bench.description} <br />
        Lat: {this.props.bench.lat}, lng: {this.props.bench.lng}
      </div>
    );
  }
});

module.exports = BenchIndexItem;
