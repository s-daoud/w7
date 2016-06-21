const React = require('react');

const Tabs = React.createClass({
  render() {
    //ASK ABOUT KEY
    const titles = this.props.tabData.map( (data, i) => {
      return <li><h1 onClick={this.switchIndex.bind(this, i)} key={i} >{data.title}</h1></li>;
    });

    const tabContent = this.props.tabData[this.state.selectIndex].content;

    return(
      <div>
        <ul>
          {titles}
        </ul>
        <article>{tabContent}</article>
      </div>
    );
  },

  getInitialState() {
    return {selectIndex: 0};
  },

  switchIndex(i) {
    this.setState({
      selectIndex: i
    });

  }

});

module.exports = Tabs;
