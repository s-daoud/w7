const React = require('react');
const StepStore = require('../stores/step_store');
const StepList = require('./step_list');

const TodoDetailView = React.createClass({

  render(){
    return (
      <div>
        <div>
          {this.props.todo.body}
        </div>
          <StepList todo={this.props.todo} />
          <button onClick={this.props.handleDestroy}>Delete!</button>
      </div>
    );
  }
});

module.exports = TodoDetailView;
