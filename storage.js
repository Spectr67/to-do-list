function writeTodo(todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

function readTodo() {
  const savedTodos = localStorage.getItem('todoList')
  return JSON.parse(savedTodos ?? '[]')
}
