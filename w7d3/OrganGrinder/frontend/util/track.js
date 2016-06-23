const KeyActions = require("../actions/key_actions");


const Track = function(attributes) {
  let defaults = {name: "New Track", roll: []};
  attributes = Object.assign(defaults, attributes);
  this.name = attributes.name;
  this.roll = attributes.roll;
  this.currentNote = 0;
};

Track.prototype.startRecording = function() {
  this.roll = [];
  this.time = Date.now();
};

Track.prototype.addNotes = function (notesArray) {
  this.roll.push({timeSlice: (Date.now() - this.time), notes: notesArray});
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.intervalCallback = function(playBackStartTime) {
  if (this.currentNote < this.roll.length) {
    const delta = Date.now() - playBackStartTime;
    if ( delta >= this.roll[this.currentNote].timeSlice ) {
      const notes = this.roll[this.currentNote].notes || [];
      KeyActions.playbackUpdate(notes);
      this.currentNote++;
    }
  } else {
    clearInterval(this.interval);
    delete this.interval;
    this.currentNote = 0;
  }
};

Track.prototype.play = function () {
  if (this.interval) { return; }
  const playBackStartTime = Date.now();
  const intervalCallback = this.intervalCallback
                               .bind(this, playBackStartTime);

  this.interval = setInterval(intervalCallback, 10);


};

module.exports = Track;
