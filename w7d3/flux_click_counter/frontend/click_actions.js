const dispatcher = require('./dispatcher');

module.exports = {
  increment() {
    dispatcher.dispatch({
      actionType: "INCREMENT"
    });
  }
};
