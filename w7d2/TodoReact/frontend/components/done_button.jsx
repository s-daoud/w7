const React = require('react');
const TodoStore = require('../stores/todo_store');

const DoneButton = React.createClass({
  handleDone() {
    TodoStore.toggleDone(this.props.todo.id);
  },
  render(){
    let status = "Done";
    if (this.props.todo.done) {
      status = "Undo";
    }
    return (
      <div>
        <button onClick={this.handleDone}>{status}</button>
      </div>
    );
  }
});

module.exports = DoneButton;
