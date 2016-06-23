const Notes = require("./util/note");
const React = require("react");
const ReactDOM = require("react-dom");
const Organ = require("./components/organ");
const Recorder = require("./components/recorder");
const Jukebox = require("./components/jukebox")

const OrganGrinder = React.createClass({
  render: function() {

    return(
    <div>
      <Organ/>
      <Recorder/>
      <Jukebox />
    </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<OrganGrinder/>, document.getElementById("content"));
});
