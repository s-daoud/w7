const React = require('react');
const ReactDOM = require('react-dom');
const TodoList = require('./components/todo_list');

document.addEventListener("DOMContentLoaded", ()=>{

  ReactDOM.render(<TodoList />, document.getElementById("main"));

});
