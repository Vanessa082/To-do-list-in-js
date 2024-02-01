const form = document.getElementById('form')
const input = document.getElementById('input')
const taskUl = document.getElementById('tasks')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  addTask()
})

function addTask(task) {
  let taskText = input.value

  if (taskText) {
    const taskEl = document.createElement('li')
    if (task && task.done) {
      taskEl.classList.add(done)
    }

    taskEl.innerText = taskText

    taskEl.addEventListener('click', () => taskEl.classList.toggle('done'))
    taskEl.addEventListener('contextmenu', (e) => {
      e.preventDefault()

      taskEl.remove()
    })
    taskUl.appendChild(taskEl)

    input.value = ''
  }
}