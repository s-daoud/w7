const React = require('react');
const StepStore = require('../stores/step_store');
const StepListItem = require('./step_list_item');

const StepList = React.createClass({
  getInitialState() {
    return {stepList: []};
  },
  stepsChanged() {
    this.setState({stepList: StepStore.all(this.props.todo.id)});
  },
  componentDidMount(){
    StepStore.addChangedHandler(this.stepsChanged);
    StepStore.fetch(this.props.todo.id);
  },
  componentWillUnmount(){
    StepStore.removeChangedHandler(this.stepsChanged);
  },
  render(){
    return (
      <div>
        {
          this.state.stepList.map( (step) => {
            return <StepListItem step={step} key={step.id}/>;
          })
        }
      </div>
    );
  }
});
module.exports = StepList;
