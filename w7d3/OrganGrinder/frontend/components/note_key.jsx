// require all the things...
const React = require('react');
const KeyStore = require('../stores/key_store');
const TONES = require('../constants/tones');
const Note = require('../util/note');

const NoteKey = React.createClass({
  getInitialState() {
    return {keyPressed: this.isKeyPressed()};
  },

  componentDidMount() {
    this.listenerToken = KeyStore.addListener(this._handleChange);
    this.note = new Note(TONES[this.props.noteName]);
  },

  _handleChange(e){
    this.setState({keyPressed: this.isKeyPressed()}, this.toggleNote);
  },

  isKeyPressed(){
    const keys = KeyStore.all();
    return keys[this.props.noteName];
  },

  toggleNote(){
    if(this.state.keyPressed) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  componentWillUnmount(){
    this.listenerToken.remove();
  },

  render() {
    let cName = `key ${this.props.noteName}`;
    return (
      <div className={cName}>{this.props.noteName}</div>
    );
  }
});



module.exports = NoteKey;
