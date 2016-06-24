const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');
const PokemonIndexItem = require('./pokemon_index_item');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const PokemonsIndex = React.createClass({
  getInitialState(){
    return { pokemons: PokemonStore.all() };
  },
  componentDidMount(){
    this.token = PokemonStore.addListener(this._onChange);
    PokemonActions.fetchAllPokemons();
  },
  _onChange(){
    this.setState({ pokemons: PokemonStore.all() });
  },
  componentWillUnmount(){
    this.token.remove();
  },
  showDetail(id){
    hashHistory.push(`/pokemon/${id}`);
  },
  render(){
    return (
      <ul>
        { this.state.pokemons.map( (pokemon) => {
          return(<li key={pokemon.id} onClick={this.showDetail.bind(null, pokemon.id)}>
                  <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>
                </li>);
          })
        }
      </ul>
    );
  }
});

module.exports = PokemonsIndex;
