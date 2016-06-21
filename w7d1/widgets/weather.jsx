const React = require('react');

const Weather = React.createClass({

  getInitialState(){
    return {
      weatherRes: undefined,
      temperatureRes: undefined
    };
  },

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.success);
  },

  success(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const urlvar = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=645c5d39c7603f17e23fcaffcea1a3c1`;
    const xhr = new XMLHttpRequest();
    xhr.open("get", urlvar);
    xhr.onload = function(){
      if (xhr.status === 200) {
        // debugger
        this.setState({
          weatherRes: JSON.parse(xhr.response).weather[0],
          temperatureRes: JSON.parse(xhr.response).main
        });
      }
    }.bind(this);
    xhr.send();
  },

  render(){
    return (
      <div>
        <div>{JSON.stringify(this.state.weatherRes)}</div>
        <div>{JSON.stringify(this.state.temperatureRes)}</div>
      </div>
    );
  }


});

module.exports = Weather;



//
