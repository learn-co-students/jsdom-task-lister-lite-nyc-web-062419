document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskButton = document.getElementById("create-task-form");
  let taskUl = document.getElementById("tasks");
  let taskDescription = document.getElementById("new-task-description");

  taskButton.addEventListener("submit", function(e) {
    e.preventDefault();
    let text = taskDescription.value;
    taskUl.innerHTML += `<li>${text}
    <button class="close" data-id=${text}>X</button> </li>
    `;
  });

  taskUL.addEventListener("click", function(e){
    if (e.target.className === "close"){
      let targetSpan;
        if (close.dataset.id === e.target.dataset.id){
          targetSpan = span
        }
      })
  
      targetSpan.textContent++
    }
});
