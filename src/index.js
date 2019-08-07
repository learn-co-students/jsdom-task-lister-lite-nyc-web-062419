document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.querySelector("#create-task-form");
  createTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const newItem = document.createElement("li");

    const userInput = document.querySelector("#new-task-description");
    newItem.textContent = userInput.value;

    const task = document.querySelector("#tasks");
    task.append(newItem);
  });
});
