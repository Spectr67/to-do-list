const modelTodo = {
  todos: [],

  addTask(text) {
    if (text === '') {
      return
    }
    const task = {
      text: text,
      completed: false,
    }
    this.todos.push(task)
    this.saveTodo()
  },

  removeTask(text) {
    console.log("privet")
    
    this.todos = this.todos.filter(todo => todo.text !== text)
    this.saveTodo()
  },

  toggleTask(text, isCompleted) {
    for (const todo of this.todos) {
      if (todo.text === text) {
        todo.completed = isCompleted
      }
    }
    this.saveTodo()
  },

  saveTodo() {
    writeToDo(this.todos)

  },

  loadTodos() {
    this.todos = loadFromStorage()
  },
}
