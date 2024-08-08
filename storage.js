function writeToDo(todoList) {
  console.log("hello")
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

function loadFromStorage() {
  const savedTodos = localStorage.getItem('todoList')
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}



