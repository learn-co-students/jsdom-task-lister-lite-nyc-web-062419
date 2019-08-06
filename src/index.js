document.addEventListener("DOMContentLoaded", () => {

  // // //  DOM elements  ///
  // this is the list where the to-dos will go
  let myList = document.getElementById("tasks");
  let submitBtn = document.querySelector("input[type=submit]");

  // // // event listener ///
  submitBtn.addEventListener("click", function(e){
    let searchBar = document.querySelector("#new-task-description")
    let newTask = document.querySelector("#new-task-description").value;
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = 'X'
    li.innerText = newTask
    myList.append(li)
    li.append(button)
    

    // prevent default behavior of submit button
    e.preventDefault();
    searchBar.value = "";
    

    // delete button event listener
    button.addEventListener("click", function(e){
      e.target.parentNode.remove()
    });
    
  });


});
