const elAddTaskButton = document.querySelector('#addTaskButton')
elAddTaskButton.onclick = onClickAddTaskButton
document.addEventListener('DOMContentLoaded', onDOMContentLoaded)

function generateLi(text, isCompleted = false) {
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
  console.log(isCompleted)
  if (isCompleted) {
    elLi.classList.add('completed')
    elInput.setAttribute('checked', '')
  }
  return elLi
}

function renderUlAddTaskList(taskList) {
  const elUl = document.querySelector('ul')
  elUl.innerHTML = ''
  taskList.forEach(renderUlAddTask)
}

function renderUlAddTask(obj) {
  const elUl = document.querySelector('ul')
  if (!obj.deleted) {
    const elLi = generateLi(obj.text, obj.completed)
    elUl.appendChild(elLi)
    console.log(obj)
  }
}

function onClickAddTaskButton() {
  const elTaskInput = document.querySelector('#taskInput')
  const text = elTaskInput.value
  if (text === " "){
    return
  }
  handleAddTask(text)
  elTaskInput.value = ''
}

function onClickDeleteTaskButton(mySuperEvent) {
  const elLi = mySuperEvent.target.parentElement
  elLi.remove()
  handleRemoveTask()
}

function onChangeDoneTaskInput(e) {
  const elLi = e.target.parentElement
  const elSpan = elLi.querySelector("span")

  

  const text = elSpan.textContent
  const isCompleted = e.target.checked
  handleEditTask(text, isCompleted)
}
