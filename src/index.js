document.addEventListener("DOMContentLoaded", () => {
  console.log('i have loaded')
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    console.log(event)
    event.preventDefault();
    const form = document.querySelector("#create-task-form")
    const value = document.querySelector("#new-task-description").value
    const color = document.querySelector("#dropdown").value
    const span = document.createElement("span")
    const li = document.createElement("li")
    li.innerText = value
    li.style.background = color
    const ul = document.querySelector("#tasks")
    span.append(li)
    ul.append(span)
    form.reset()

}, false);  
  
});
