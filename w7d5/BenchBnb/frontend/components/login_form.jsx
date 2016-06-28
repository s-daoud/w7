const React = require('react');
const SessionActions = require('../actions/session_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

const LoginForm = React.createClass({
  getInitialState(){
    return ({username: "", password: "", errors: ErrorStore.formErrors("login")});
  },
  componentDidMount(){
    ErrorStore.addListener(this.trackErrors);
    SessionStore.addListener(this.checkLogin);
  },
  trackErrors(){
    this.setState({errors: ErrorStore.formErrors("login")});
  },
  checkLogin(){
    if(SessionStore.isUserLoggedIn){
      hashHistory.push("/");
    }
  },
  updateName(e){
    e.preventDefault();
    this.setState({username: e.target.value});
  },
  updatePassword(e){
    e.preventDefault();
    this.setState({password: e.target.value});
  },
  handleSubmit(e){
    e.preventDefault();
    SessionActions.login({username: this.state.username, password: this.state.password});
  },
  render(){
    let errors = "";
    if(this.state.errors){
      errors = this.state.errors.map(error => {
        return (<div className="error" key={error}>{error}<br/></div>);
      });
    }

    return (
      <div>
        {errors}
        <form onSubmit={this.handleSubmit} className="form">
          <label for="username">Username</label>
            <input onChange={this.updateName} /> <br />
          <label for="password">Password</label>
            <input type="password" onChange={this.updatePassword} /> <br />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
