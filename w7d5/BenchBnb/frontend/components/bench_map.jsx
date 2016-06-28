const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory;

const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass({
  componentDidMount(){
    BenchStore.addListener(this._onChange);
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.markers = {};
    this.map.addListener('click', this.makeForm);
    this.idler();
  },
  makeForm(e){
    let lat = e.latLng.lat();
    let lng = e.latLng.lng();
    let coords = {lat: lat, lng: lng};
    hashHistory.push({
      pathname: "benches/new",
      query: coords
    });
  },
  idler(){
    google.maps.event.addListener(this.map, 'idle', () => {
      const latlng = this.map.getBounds();

      const northEast = {
        'lat': latlng.getNorthEast().lat(),
        'lng': latlng.getNorthEast().lng()
      };

      const southWest = {
        'lat': latlng.getSouthWest().lat(),
        'lng': latlng.getSouthWest().lng()
      };

      const bounds = {"bounds": {"northEast": northEast, "southWest": southWest}};

      BenchActions.fetchAllBenches(bounds);
    });
  },
  _onChange(){
    const benches = BenchStore.all();
    let that = this;
    let marker;
    benches.forEach(function(bench){
      if (!that.markers.hasOwnProperty(bench.id)){
        marker = new google.maps.Marker({
          position: {lat: bench.lat, lng: bench.lng},
          map: that.map,
          title: `${bench.description}`
        });

        marker.addListener('click', () => {
          alert(`${marker.title}`);
        });

        that.markers[bench.id] = marker;
      }
    });
    for(const id in that.markers){
      if(!this.idInBench(id, benches)){
        that.markers[id].setMap(null);
        delete that.markers[id];
      }
    }
  },
  idInBench(id, benches){
    let toggle = false
    benches.forEach(bench => {
      if (parseInt(id) === bench.id){
        toggle = true;
      }
    });
    return toggle;
  },
  render(){
    return(
      <div className="map" ref="map">
      </div>
    );
  }
});

module.exports = BenchMap;
