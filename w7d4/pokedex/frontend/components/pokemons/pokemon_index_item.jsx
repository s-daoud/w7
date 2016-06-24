const React = require('react');

const PokemonIndexItem = React.createClass({
  render(){
    return(
      <div className="poke-list-item" key={this.props.pokemon.id}>
        Name: {this.props.pokemon.name} <br/>
        Poke Type: {this.props.pokemon.poke_type}
      </div>
    );
  }

});

module.exports = PokemonIndexItem;
