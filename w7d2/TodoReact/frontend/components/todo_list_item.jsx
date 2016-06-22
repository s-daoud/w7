const React = require('react');
const TodoStore = require('../stores/todo_store');
const DoneButton = require('./done_button');
const TodoDetailView = require('./todo_detail_view');

const TodoListItem = React.createClass({
  getInitialState(){
    return {visible: false};
  },
  handleDestroy() {
    TodoStore.destroy(this.props.todo.id);
  },
  toggleVis(){
    this.setState({visible: !this.state.visible});
  },
  render(){
    let detailView = undefined;
    if (this.state.visible) {
      detailView = <TodoDetailView
                    handleDestroy={this.handleDestroy}
                    todo={this.props.todo}/>;
    }

    return (
      <div>
        <div onClick={this.toggleVis}>
          {this.props.todo.title}
        </div>
        {detailView}
        <DoneButton todo={this.props.todo} key={this.props.todo.id}/>

      </div>
    );
  }
});

module.exports = TodoListItem;
