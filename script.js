let li = ``;

data.forEach((task) => {
  li += ` <li>${task.description} ${task.done} ${task._id}</li>`;
});

document.getElementById("todo-list").innerHTML = li;

function validateForm() {
  let x = document.forms["extraTodoForm"]["extraTodo"].value;
  console.log(extraTodo.value);
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

const data = { description: "extraTodo", done: false };

document.getElementById("btn-add-task").addEventListener("click", update);
fetchTodo();
