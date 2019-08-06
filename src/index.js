document.addEventListener("DOMContentLoaded", () => {
  // event listener for submit action
  const myForm = document.querySelector("form#create-task-form");
  const removeButton = `<button
      type="button"
      onclick="return this.parentNode.remove();"
      class="remove"
    >
      X
    </button>`;

  const lineItem = toDo => `<li>${toDo}${removeButton}</li>`;

  myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const myText = document.querySelector("input#new-task-description");
    const myList = document.querySelector("div#list");
    const newTask = lineItem(myText.value);
    // myForm.reset();

    myList.innerHTML += newTask;
    myText.value = "";
  });
});
