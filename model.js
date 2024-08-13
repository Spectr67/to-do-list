const modelTodo = {
  todos: [],
  id: 1,

  addTask(text) {
    if (text === '') return
    const task = {
      id: this.id++,
      text: text,
      completed: false,
    }
    this.todos.push(task)
    this.saveTodo()
  },

  removeTask(text) {
    this.todos = this.todos.filter(todo => todo.text !== text)
    this.saveTodo()
  },

  toggleTask(id, isCompleted) {
    for (const todo of this.todos) {
      if (todo.id === id) {
        todo.completed = isCompleted
      }
    }
    this.saveTodo()
  },

  saveTodo() {
    writeTodo(this.todos)
  },

  loadTodos() {
    this.todos = readTodo()
  },
}
