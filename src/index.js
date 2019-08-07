document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // locate form
  const createTaskForm = document.querySelector("#create-task-form");
  // fucntion that when data is submitted prevents default action
  createTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    //locate text field where user can inpit data and assign to varaible
    const userInput = document.querySelector("#new-task-description");
    // creating html element by tag name
    const newItem = document.createElement("li");
    // newItem text content is set to the value of the users input
    newItem.textContent = userInput.value;
    //locate element where task list will go
    const task = document.querySelector("#tasks");
    // append newItem onto task
    task.append(newItem);
  });

  const removeItem = document.querySelector("#tasks");

  removeItem.addEventListener("click", function(e) {
    if (e.target.className === "beef") {
      e.target.parentNode.remove();
    }
  });
});
