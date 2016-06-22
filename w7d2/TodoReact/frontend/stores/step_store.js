let _steps = {}, _callbacks = [];

const StepStore = {

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

  all(todoId){
    return _steps.todoId;
  },

  fetch(todoId){
    $.ajax({
      url: `/api/todos/${todoId}/steps`,
      dataType: "json",
      success(steps){
        _steps.todoId = steps;
        StepStore.changed();
      }
    });
  },

  create(step){
    $.ajax({
      method: 'post',
      url: `/api/todos/${step.todo_id}/steps`,
      data: step,
      dataType: "json",
      success(stepRes){
        _steps.todoId.push(stepRes);
        StepStore.changed();
      }
    });
  },

  destroy(id){
    for(let todoId in _steps) {
      for(let i = 0; i < _steps[todoId].length; i++){
        if (_steps.todoId[i].id === id) {
          $.ajax({
            method: 'delete',
            url: `/api/steps/${id}`,
            dataType: "json",
            success(){
              _steps.todoId.splice(i, 1);
              StepStore.changed();
            }
          });
        }
      }
    }
  },

  toggleDone(id) {
    let status = false;
    let item = undefined;
    for(let todoId in _steps) {
      for(let i = 0; i < _steps[todoId].length; i++){
        if (_steps.todoId[i].id === id) {
          item = _steps.todoId[i];
          status = !(item.done);
        }
      }
    }
    $.ajax({
      method: 'patch',
      url: `/api/steps/${id}`,
      data: {step: {done: status}},
      dataType: "json",
      success(){
        item.done = status;
        StepStore.changed();
      }
    });
  }
};



module.exports = StepStore;
