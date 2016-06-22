const React = require('react');
const StepStore = require('../stores/step_store');
const StepList = require('./step_list');

const StepListItem = React.createClass({
  handleDestroy() {
    StepStore.destroy(this.props.step.id);
  },
  handleDone() {
    StepStore.toggleDone(this.props.step.id);
  },
  render(){
    let status = "Done";
    if (this.props.step.done) {
      status = "Undo";
    }
    return (
      <div>
        <div>
          {this.props.step.body}
        </div>
        <button onClick={this.handleDone}>{status}</button>
        <button onClick={this.handleDestroy}>Delete!</button>
      </div>
    );
  }
});

module.exports = StepListItem;
