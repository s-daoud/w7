const dispatcher = require('../dispatcher/dispatcher');
const PokemonConstants = require('../constants/pokemon_constants');
const ApiUtil = require('../util/api_util');

const PokemonActions = {
  receiveAllPokemons(pokemons) {
    dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },
  fetchAllPokemons(){
    ApiUtil.fetchAllPokemons(this.receiveAllPokemons);
  },
  fetchPokemon(params){
    ApiUtil.fetchSinglePokemon(params, this.receiveSinglePokemon);
  },
  receiveSinglePokemon(pokemon){
    dispatcher.dispatch({
      actionType: PokemonConstants.SINGLE_POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

window.PokemonActions = PokemonActions;

module.exports = PokemonActions;
