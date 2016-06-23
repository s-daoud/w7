const dispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const TONES = require('../constants/tones');

const KeyStore = new Store(dispatcher);

let _keys = {};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "KEY_DOWN":
      _keys[payload.key] = true;
      this.__emitChange();
      break;
    case "KEY_UP":
      delete _keys[payload.key];
      this.__emitChange();
      break;
    case "UPDATE_NOTES":
      console.log("before update", _keys);
      _keys = {};
      for (let note of payload.notes) {
         _keys[note] = true;
      }
      console.log("after update", _keys);
      this.__emitChange();
      break;
  }
};

KeyStore.all = function() {
  return _keys;
};

window.KeyStore = KeyStore;
module.exports = KeyStore;
