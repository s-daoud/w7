const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const AutoComplete = React.createClass({
  getInitialState() {
    return {query: "", nameList: []};
  },
  handleInput(e){
    this.setState({query: e.target.value,
      nameList: this.props.names.filter( name => {
        return name.toLowerCase().includes(e.target.value);
      })
    });
  },

  autoName(e){
    this.setState({query: e.target.className, nameList: [e.target.className]});
  },

  render() {
    const searchNames = this.state.nameList.map( name => {
      return <li key={name} className={name} onClick={this.autoName}>{name}</li>;
      });

    return (
      <div>
        <input type="text" value={this.state.query} onChange={this.handleInput}></input>
        <ul>
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>{searchNames}</ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
