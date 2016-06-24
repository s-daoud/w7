const React = require('react');
const ReactDOM = require('react-dom');
const ApiUtil = require('./util/api_util');
const PokemonStore = require('./stores/pokemon');
const PokemonActions = require('./actions/pokemon_actions');
const PokemonsIndex = require('./components/pokemons/pokemons_index');
const PokemonDetail = require('./components/pokemons/pokemon_detail');
const ToyDetail = require('./components/toys/toy_detail');
const App = require('./components/app');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>,
                  document.getElementById('root'));
});


const routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
      <Route path="toys/:toyId" component={ToyDetail}/>
    </Route>
  </Route>
);
