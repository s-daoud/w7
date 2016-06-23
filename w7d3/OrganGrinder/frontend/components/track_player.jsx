const React = require('react');
const KeyActions = require('../actions/key_actions');

const TrackPlayer = React.createClass({
  deleteTrack(){
    KeyActions.removeTracks(this.props.track);
  },
  render() {
    return (
      <div>
        {this.props.track.name}
        <button className="play"
                onClick={this.props.track.play.bind(this.props.track)}>Play Back</button>
        <button className="delete"
                onClick={this.deleteTrack}>Delete</button>
      </div>
    );
  }
});

module.exports = TrackPlayer;
