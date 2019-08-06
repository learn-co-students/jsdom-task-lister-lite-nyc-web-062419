document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form#create-task-form")

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    const list = document.querySelector("ul#tasks")
    let item = document.createElement("li")

    const field = document.querySelector("input#new-task-description")
    item.innerText = field.value
    field.value = ""
    
    list.append(item)
  })
});
