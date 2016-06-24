const React = require('react');
const PokemonsIndex = require('./pokemons/pokemons_index');
const PokemonDetail = require('./pokemons/pokemon_detail');
const ToyDetail = require('./toys/toy_detail');


const App = React.createClass({
  render(){
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
