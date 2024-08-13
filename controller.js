function handleAddTask(text) {
  modelTodo.addTask(text)
  renderUlTaskList(modelTodo.todos)
}

function handleRemoveTask(text) {
  modelTodo.removeTask(text)
  renderUlTaskList(modelTodo.todos)
}

function handleToggleTask(id, isCompleted) {
  modelTodo.toggleTask(+id, isCompleted)
  renderUlTaskList(modelTodo.todos)
}

function onDOMContentLoaded() {
  modelTodo.loadTodos()
  renderUlTaskList(modelTodo.todos)
}
let mySuperVariable = 101
