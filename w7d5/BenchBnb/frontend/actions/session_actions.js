const dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');

const SessionActions = {
  signup(data){
    SessionApiUtil.signup("signup", data, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  login(data){
    SessionApiUtil.login("login", data, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logout(){
    SessionApiUtil.logout(this.receiveCurrentUser, ErrorActions.setErrors);
  },
  receiveCurrentUser(user){
    if (Object.keys(user).length) {
      dispatcher.dispatch({
        actionType: SessionConstants.LOGIN,
        user: user
      });
    } else {
      dispatcher.dispatch({
        actionType: SessionConstants.LOGOUT,
        user: user
      });
    }
  }
};

module.exports = SessionActions;
