const React = require('react');
const Track = require('../util/track');
const KeyStore = require('../stores/key_store');
const TrackStore = require('../stores/track_store');
const KeyActions = require('../actions/key_actions');

const Recorder = React.createClass({
  getInitialState(){
    return {recording: false, track: new Track()};
  },
  _addNotes(){
    const notes = KeyStore.all();
    this.state.track.addNotes(Object.keys(notes));
  },
  startRecording(){
    this.listenerToken = KeyStore.addListener(this._addNotes);
    this.state.track.startRecording();
  },
  stopRecording(){
    console.log(KeyStore);
    this.state.track.stopRecording();
    this.listenerToken.remove();
  },
  play(){
    this.state.track.play();
  },
  save(){
    KeyActions.addTracks(this.state.track);
  },
  render() {
    return (
      <div>
        <button className="play"
                onClick={this.play}>Play Back</button>
        <button className="start"
                onClick={this.startRecording}>Start Recording</button>
        <button className="stop"
                onClick={this.stopRecording}>Stop Recording</button>
        <button className="save"
                onClick={this.save}>Save Track</button>
      </div>
    );
  }
});

module.exports = Recorder;
