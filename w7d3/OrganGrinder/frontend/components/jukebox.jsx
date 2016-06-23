const React = require('react');
const Track = require('../util/track');
const TrackStore = require('../stores/track_store');
const TrackPlayer = require('./track_player');

const Jukebox = React.createClass({
  getInitialState(){
    return {tracks: TrackStore.all()};
  },
  componentDidMount(){
    TrackStore.addListener(this._updateTrack);
  },
  _updateTrack(){
    this.setState({tracks: TrackStore.all()});
  },
  render(){
    let allTracks = [];
    for(let track in this.state.tracks) {
      allTracks.push(<TrackPlayer track={this.state.tracks[track]} key={track.name} />);
    }
    return (
      <div>
        {allTracks}
      </div>
    );
  }
});

module.exports = Jukebox;
