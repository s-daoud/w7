module.exports = {fetchAllPokemons: function(callback) {
  $.ajax({
    url: "api/pokemon",
    success(response) {
      callback(response);
    }
  });
},
  fetchSinglePokemon: function(params, callback){
    $.ajax({
      url: "api/pokemon/" + params.pokemonId,
      success(response){
        callback(response);
      }
    });
  }
};
