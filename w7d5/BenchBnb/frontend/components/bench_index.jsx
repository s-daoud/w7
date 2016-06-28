const React = require('react');

const BenchStore = require('../stores/bench_store');
const BenchIndexItem = require('./bench_index_item');

const BenchIndex = React.createClass({
  getInitialState(){
    return {benches: BenchStore.all()};
  },
  componentDidMount(){
    this.token = BenchStore.addListener(this._onChange);
  },
  _onChange(){
    this.setState({benches: BenchStore.all()});
  },
  componentWillUnmount(){
    this.token.remove();
  },
  render(){
    return(
      <div className="benches">
        {
          this.state.benches.map( bench => {
            return ( <BenchIndexItem bench={bench} key={bench.id} className="bench"/> );
          })
        }
      </div>
    );
  }

});

module.exports = BenchIndex;
