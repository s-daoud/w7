const React = require("react");
const Tones = require("../constants/tones");
const NoteKey = require("./note_key");
const KeyActions = require('../actions/key_actions');
const Recorder = require('./recorder');

const Organ = React.createClass({
  addKeyListener(){
    document.addEventListener("keyup", this._handleKeyReleased);
    document.addEventListener("keydown", this._handleKeyPressed);
  },
  removeKeyListener(){
    document.removeEventListener("keyup", this._handleKeyReleased);
    document.removeEventListener("keydown", this._handleKeyPressed);
  },
  _handleKeyReleased(e){
    let code = e.keyCode;
    KeyActions.keyReleased(code);
  },
  _handleKeyPressed(e){
    let code = e.keyCode;
    KeyActions.keyPressed(code);
  },
  componentDidMount() {
    this.addKeyListener();
  },
  componentWillUnmount() {
    this.removeKeyListener();
  },
  render() {
    const noteKeys = [];

    for (let noteName in Tones) {
      noteKeys.push(<NoteKey noteName={noteName} key={noteName}/>);
    }

    return (
      <div>
        {noteKeys}
      </div>
    );
  }

});

module.exports = Organ;
