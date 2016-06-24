const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ToyIndexItem = require('./toy_index_item');

const ToysIndex = React.createClass({
  showDetail(id){
    hashHistory.push(`pokemon/${this.props.pokemonId}/toys/${id}`);
  },
  render() {
    if(this.props.toys){
      return (
        <ul>
          { this.props.toys.map( (toy) => {
            return(<li key={toy.id} onClick={this.showDetail.bind(null, toy.id)}>
                    <ToyIndexItem toy={toy} key={toy.id}/>
                  </li>);
            })
          }
        </ul>
      );
    } else {
      return(<div>hi</div>);
    }
  }
});

module.exports = ToysIndex;
