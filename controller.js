function handleAddTask(text) {
  modelTodo.addTask(text)
  renderUlAddTaskList(modelTodo.todos)
}

function handleRemoveTask() {
  console.log("BYe")
  modelTodo.removeTask()
  renderUlAddTaskList(modelTodo.todos)
}

function handleEditTask(text, isCompleted) {
  modelTodo.toggleTask(text, isCompleted)
  renderUlAddTaskList(modelTodo.todos)
}

function onDOMContentLoaded() {
  modelTodo.loadTodos()
  renderUlAddTaskList(modelTodo.todos)
}
let mySuperVariable = 101 