let _todos = [], _callbacks = [];

const TodoStore = {

  changed(){
    _callbacks.forEach((callback)=>{
      callback();
    });
  },

  addChangedHandler(callback){
    _callbacks.push(callback);
  },

  removeChangedHandler(callback){
    const idx = _callbacks.indexOf(callback);
    _callbacks.splice(idx, 1);
  },

  all(){
    return _todos;
  },

  fetch(){
    $.ajax({
      url: "/api/todos",
      dataType: "json",
      success(todos){
        _todos = todos;
        TodoStore.changed();
      }
    });
  },

  create(todo){
    $.ajax({
      method: 'post',
      url: "/api/todos",
      data: todo,
      dataType: "json",
      success(todoRes){
        _todos.push(todoRes);
        TodoStore.changed();
      }
    });
  },

  destroy(id){
    for(let i = 0; i < _todos.length; i++){
      if (_todos[i].id === id) {
        $.ajax({
          method: 'delete',
          url: `/api/todos/${id}`,
          dataType: "json",
          success(){
            _todos.splice(i, 1);
            TodoStore.changed();
          }
        });
      }
    }
  },

  toggleDone(id) {
    let status = false;
    let item = undefined;
    for(let i = 0; i < _todos.length; i++){
      if (_todos[i].id === id) {
        item = _todos[i];
        status = !(item.done);
      }
    }
    $.ajax({
      method: 'patch',
      url: `/api/todos/${id}`,
      data: {todo: {done: status}},
      dataType: "json",
      success(){
        item.done = status;
        TodoStore.changed();
      }
    });
  }
};



module.exports = TodoStore;
