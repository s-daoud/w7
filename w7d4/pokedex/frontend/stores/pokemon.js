const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');

const PokemonStore = new Store(Dispatcher);

let _pokemons = {};

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  for(let i = 0; i < pokemons.length; i++){
    _pokemons[pokemons[i].id] = pokemons[i];
  }
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "SINGLE_POKEMON_RECEIVED":
    _pokemons[payload.pokemon.id] = payload.pokemon;
      this.__emitChange();
      break;
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.pokemons);
      this.__emitChange();
      break;
  }

};


PokemonStore.all = function (){
  let result = [];
  Object.keys(_pokemons).forEach( key => {
    result.push(_pokemons[key]);
  });
  return result;
};

PokemonStore.find = function(id){
  return _pokemons[id];
};

window.PokemonStore = PokemonStore;

module.exports = PokemonStore;
