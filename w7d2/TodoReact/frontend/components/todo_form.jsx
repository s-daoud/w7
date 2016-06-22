const React = require('react');
const TodoStore = require('../stores/todo_store');

const TodoForm = React.createClass({
  getInitialState() {
    return {title: "", body: "", done: false};
  },
  updateTitle(e) {
    this.setState({title: e.currentTarget.value});
  },
  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  },
  handleSubmit() {
    TodoStore.create({todo: {title: this.state.title, body: this.state.body}});
    this.setState({title: "", body: ""});
  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               value={this.state.title}
               onChange={this.updateTitle}/>
        <input type="text"
               value={this.state.body}
               onChange={this.updateBody}/>
        <input type="submit" value="Submit!" />
      </form>
    );
  }
});

module.exports = TodoForm;
