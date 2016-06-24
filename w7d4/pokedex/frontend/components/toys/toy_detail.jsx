const React = require('react');
const PokemonStore = require('../../stores/pokemon');
const PokemonActions = require('../../actions/pokemon_actions');

const ToyDetail = React.createClass({
  getStateFromStore(){
    let pokemon = PokemonStore.find(parseInt(this.props.params.pokemonId));
    let foundToy;
    pokemon.toys.forEach( (toy)=>{
      if(toy.id === parseInt(this.props.params.toyId)){
        foundToy = toy;
      }
    });
    if(foundToy === undefined){
      alert('not a valid toy for this pokemon');
    }
    return foundToy;
  },
  getInitialState(){
    return {toy: this.getStateFromStore()};
  },
  _onChange(){
    this.setState({toy: this.getStateFromStore()});
  },
  componentDidMount(){
    this.token = PokemonStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.token.remove();
  },
  componentWillReceiveProps(props){
    let pokemon = PokemonStore.find(parseInt(props.params.pokemonId));
    let foundToy;
    pokemon.toys.forEach( (toy)=>{
      if(toy.id === parseInt(props.params.toyId)){
        foundToy = toy;
      }
    });
    if(foundToy === undefined){
      alert('not a valid toy for this pokemon');
    }
    this.setState({toy: foundToy});
  },
  render(){
    const details = (
      <div className="detail">
        <img src={this.state.toy.image_url}/>
        name: {this.state.toy.name}<br/>
        price: {this.state.toy.price}<br/>
        happiness: {this.state.toy.happiness}<br/>
        </div>
    );
    return (
        <div className="toy-detail-pane">
          {details}
        </div>
    );
  }
});

module.exports = ToyDetail;
