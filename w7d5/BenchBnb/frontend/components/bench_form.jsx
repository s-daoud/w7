const React = require('react');
const BenchActions = require('../actions/bench_actions');
const hashHistory = require('react-router').hashHistory;

const BenchForm = React.createClass({
  getInitialState(){
    return ({desc: "", num: "", lat: this.props.location.query.lat, lng: this.props.location.query.lng});
  },
  updateDesc(e){
    e.preventDefault();
    this.setState({desc: e.target.value});
  },
  updateNum(e){
    e.preventDefault();
    this.setState({num: parseInt(e.target.value)});
  },
  updateLat(e){
    e.preventDefault();
    this.setState({lat: parseFloat(e.target.value)});
  },
  updateLng(e){
    e.preventDefault();
    this.setState({lng: parseFloat(e.target.value)});
  },
  handleSubmit(e){
    e.preventDefault();
    let bench = {description: this.state.desc,
                 seating: this.state.num,
                 lat: this.state.lat,
                 lng:this.state.lng};
    BenchActions.createBench(bench);
    hashHistory.push('/');
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label for="desc">Description</label>
          <input type="text" id="desc" onChange={this.updateDesc}/>
          <br />
        <label for="num">Number of seats</label>
          <input type="text" id="num" onChange={this.updateNum}/>
          <br />
        <label for="lat">Latitude</label>
          <input type="text" id="lat" value={this.props.location.query.lat} onChange={this.updateLat} disabled/>
          <br />
        <label for="lng">Longitude</label>
          <input type="text" id="lng" value={this.props.location.query.lng} onChange={this.updateLng} disabled/>
          <br />
        <input type="submit" value="Add Bench"/>
      </form>
    );
  }
});

module.exports = BenchForm;
