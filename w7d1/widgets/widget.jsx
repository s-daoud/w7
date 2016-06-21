const React = require('react');
const Weather = require('./weather');
const Tabs = require('./tabs');
const Clock = require('./clock');
const AutoComplete = require('./autocomplete');

const Widget = React.createClass({
  render() {
    let nonsense = [
      {title: "Unicorns", content: "haosdjfaiosdjfaosdijffiadfijaosdjf"},
      {title: "Dragons", content: "RAWWWWRARRAWRWARAWRARWWRA"},
      {title: "Chimaera", content: "uhhhhh what?"}
    ];
    let names = ["Fiora", "Dr Mundo", "Anivia", "Nasus", "Leona", "Morgana",
                 "Annie", "Hecarim", "Miss Fortune", "Lux", "Jax"];


    return(
      <div>
        <Tabs tabData={nonsense} />
        <Clock />
        <Weather />
        <AutoComplete names={names}/>
      </div>
    );
  }
});

module.exports = Widget;
