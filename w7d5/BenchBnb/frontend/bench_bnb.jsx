const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const Link = ReactRouter.Link;

const Search = require('./components/search');
const BenchForm = require('./components/bench_form');
const LoginForm = require('./components/login_form');
const SignupForm = require('./components/signup_form');
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const App = React.createClass({
  getInitialState(){
    return {user: SessionStore.currentUser()};
  },
  componentDidMount(){
    SessionStore.addListener(this.handleChange);
  },
  handleChange(){
    this.setState({user: SessionStore.currentUser()});
  },
  logout(e){
    e.preventDefault();
    SessionActions.logout();
  },
  render() {
    let info;
    if (SessionStore.isUserLoggedIn()) {
      info = (<div className="topbar">
                <header><h3>{SessionStore.currentUser()}</h3></header><br/>
                <button onClick={this.logout}>Logout</button>
              </div>);
    } else {
      info = (<div className="topbar">
                <Link to="/login">Log in</Link><br />
                <Link to="/signup">Sign up</Link>
              </div>);
    }

    return (
      <div>
        {/*<header><h1>Bench BnB</h1></header>*/}
        {info}
        {this.props.children}
      </div>
    );
  }
});

const _ensureLoggedIn = function(nextState, replace){
  if (!SessionStore.isUserLoggedIn()){
    replace("login");
  }
};

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
      <Route component={BenchForm} path="benches/new" onEnter={_ensureLoggedIn}/>
      <Route component={LoginForm} path="login" />
      <Route component={SignupForm} path="signup" />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(
    routes,
    document.getElementById('content')
  );
});
