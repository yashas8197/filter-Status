const tasks = [
  { id: 1, title: 'Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', status: 'inProgress' },
  { id: 3, title: 'Task 3', status: 'completed' },
  { id: 4, title: 'Task 4', status: 'todo' },
]

const listTask = document.querySelector('#listTask');
const selectStatus = document.querySelector('#selectStatus');

function renderList(filterStatus) {

  console.log(filterStatus)


  const listTaskElements = filterStatus.map(task => `
  <li>
    <strong>ID: </strong>${task.id}<br>
    <strong>Title: </strong>${task.title}<br>
    <strong>Status: </strong>${task.status}<br>
    <hr>
  </li>
`)

  listTask.innerHTML = listTaskElements.join('')
}

renderList(tasks)

selectStatus.addEventListener('change', function() {
  let selectedStatus = selectStatus.value;
  if (selectedStatus !== 'All') {
    const filteredTasks = tasks.filter(task => task.status === selectedStatus)
    renderList(filteredTasks)
  } else {
    renderList(tasks)
  }
})




