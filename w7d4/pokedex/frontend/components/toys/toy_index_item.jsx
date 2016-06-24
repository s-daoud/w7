const React = require('react');

const ToyIndexItem = React.createClass({
  render(){
    return(
      <div className="toy-list-item" key={this.props.toy.id}>
        Name: {this.props.toy.name} <br/>
        Happiness: {this.props.toy.happiness}<br/>
        Price: {this.props.toy.price}<br/>
      </div>
    );
  }

});

module.exports = ToyIndexItem;
