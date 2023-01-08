const BASEURL = "http://localhost:3000/";

//get todolist

async function fetchTodo() {
  response = await fetch(BASEURL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let tasks = Object.keys(data).map((key) => ({
        id: key,
        description: data[key].description,
        done: data[key].done,
      }));
      return tasks;
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchTodo();

//update todolist with task from form

async function update() {
  fetch(BASEURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  fetchTodo();
}
