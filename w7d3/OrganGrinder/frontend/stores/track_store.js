const dispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

const TrackStore = new Store(dispatcher);

let _tracks = {};

TrackStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_TRACK":
      _tracks[payload.track.name] = payload.track;
      this.__emitChange();
      break;
    case "REMOVE_TRACK":
      console.log("Caught a remove track action");
      console.log("before delete action", _tracks);
      // console.log(payload.track.name);
      console.log(payload.track);
      delete _tracks[payload.track.name];
      console.log("after delete action", _tracks);
      this.__emitChange();
      break;
  }
};

TrackStore.all = function() {
  return _tracks;
};

window.TrackStore = TrackStore;
module.exports = TrackStore;
