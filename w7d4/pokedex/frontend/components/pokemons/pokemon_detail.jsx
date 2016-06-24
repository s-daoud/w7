const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');
const ToysIndex = require('../toys/toys_index');
const ToyDetail = require('../toys/toy_detail');


const PokemonDetail = React.createClass({
  getStateFromStore(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },
  getInitialState(){
    return {pokemon: this.getStateFromStore()};
  },
  componentWillReceiveProps(props){
    PokemonActions.fetchPokemon(props.params);
  },
  componentDidMount(){
    this.token = PokemonStore.addListener(this.resetState);
    PokemonActions.fetchPokemon(this.props.params);
  },
  resetState(){
    this.setState({pokemon: this.getStateFromStore()});
  },
  componentWillUnmount(){
    this.token.remove();
  },
  render(){
    let mappedMoves = this.state.pokemon.moves.map( (move) => {
      return `${move} `;
    });

    let details = <div></div>;
    if(this.state.pokemon){
      details = (<div className="detail">
        <img src={this.state.pokemon.image_url}/>
        name: {this.state.pokemon.name}<br/>
        attack: {this.state.pokemon.attack}<br/>
        defense: {this.state.pokemon.defense}<br/>
        poke_type: {this.state.pokemon.poke_type}<br/>
        moves: {mappedMoves}<br/>
        </div>
      );
    }



    return(
      <div>
        <div className="pokemon-detail-pane">
          {details}
          <ToysIndex toys={this.state.pokemon.toys}
                    pokemonId={this.state.pokemon.id}/>
        </div>

        {this.props.children}
      </div>
    );
  }
});

window.PokemonDetail = PokemonDetail;
module.exports = PokemonDetail;
