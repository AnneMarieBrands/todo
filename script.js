async function fetchTodo() {
  response = await fetch("http://localhost:3000/", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let li = ``;

      data.forEach((task) => {
        li += ` <li>${task.description} ${task.done} ${task._id}</li>`;
      });

      document.getElementById("todo-list").innerHTML = li;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchTodo();

function validateForm() {
  let x = document.forms["extraTodoForm"]["extraTodo"].value;
  console.log(extraTodo.value);
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// const data = { description: "extraTodo", done: false };

// document.getElementById("btn-add-task").addEventListener("click", update);

// function update() {
//   fetch("http://localhost:3000/", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   fetchTodo();
// }
