const React = require('react');
const TodoStore = require('../stores/todo_store');
const TodoListItem = require('./todo_list_item');
const TodoForm = require('./todo_form');

const TodoList = React.createClass({
  getInitialState() {
    return {todoList: TodoStore.all()};
  },
  todosChanged() {
    this.setState({todoList: TodoStore.all()});
  },
  componentDidMount(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },
  render(){
    return (
      <div>
        <TodoForm />
        {
          this.state.todoList.map( (list) => {
            return <TodoListItem todo={list} key={list.id}/>;
          })
        }
      </div>
    );
  }
});

module.exports = TodoList;
