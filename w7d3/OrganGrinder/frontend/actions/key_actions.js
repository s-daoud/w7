const dispatcher = require('../dispatcher/dispatcher');

const Mapping = {
   65: "C5",
   83: "D5",
   68: "E5",
   70: "F5",
   74: "G5",
   75: "A5",
   76: "B5",
  186: "C6"
};

const KeyActions = {
  keyPressed(code){
    dispatcher.dispatch( {       key: Mapping[code],
                          actionType: "KEY_DOWN"} );
  },

  keyReleased(code){
    dispatcher.dispatch( {       key: Mapping[code],
                          actionType: "KEY_UP"} );
  },

  playbackUpdate(notes) {
    dispatcher.dispatch( {       notes: notes,
                            actionType: "UPDATE_NOTES"} );
  },

  addTracks(track) {
    dispatcher.dispatch( {       track: track,
                            actionType: "ADD_TRACK"} );
  },

  removeTracks(track) {
    dispatcher.dispatch( {       track: track,
                            actionType: "REMOVE_TRACK"} );
  }
};

module.exports = KeyActions;
