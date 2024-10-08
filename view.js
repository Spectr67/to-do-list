const elAddTaskButton = document.querySelector('#addTaskButton')
elAddTaskButton.onclick = onClickAddTaskButton
document.addEventListener('DOMContentLoaded', onDOMContentLoaded)

function generateLi(text, id, isCompleted = false) {
  const elLi = document.createElement('li')
  const elInput = document.createElement('input')
  const elSpan = document.createElement('span')
  const elButton = document.createElement('button')
  elInput.classList.add('checkbox')
  elSpan.classList.add('task-text')
  elButton.classList.add('deleteButton')
  elInput.setAttribute('type', 'checkbox')
  elButton.textContent = 'Удалить'
  elSpan.textContent = text
  elButton.onclick = onClickDeleteTaskButton
  elInput.onchange = onChangeDoneTaskInput
  elLi.appendChild(elInput)
  elLi.appendChild(elSpan)
  elLi.appendChild(elButton)

  elLi.setAttribute('todo-id', id)

  if (isCompleted) {
    elLi.classList.add('completed')
    elInput.setAttribute('checked', '')
  }
  return elLi
}

function renderUlTaskList(taskList) {
  const elUl = document.querySelector('ul')
  elUl.innerHTML = ''
  taskList.forEach(renderUlTask)
}

function renderUlTask(obj) {
  const elUl = document.querySelector('ul')
  if (!obj.deleted) {
    const elLi = generateLi(obj.text, obj.id, obj.completed)
    elUl.appendChild(elLi)
    console.log(obj)
  }
}

function onClickAddTaskButton() {
  const elTaskInput = document.querySelector('#taskInput')
  const text = elTaskInput.value
  if (text === ' ') {
    return
  }
  handleAddTask(text)
  elTaskInput.value = ''
}

function onClickDeleteTaskButton(event) {
  const elLi = event.target.parentElement
  const taskText = elLi.querySelector('span').textContent
  elLi.remove()
  handleRemoveTask(taskText)
}

function onChangeDoneTaskInput(e) {
  const elLi = e.target.parentElement
  const id = elLi.getAttribute('todo-id')
  const isCompleted = e.target.checked
  handleToggleTask(id, isCompleted)
}
