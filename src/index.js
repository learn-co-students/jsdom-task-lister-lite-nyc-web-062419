document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    event.preventDefault();
    let input = document.getElementById("new-task-description") //get task input
    let textnode = document.createTextNode(input.value);        // Create a text node
    let node = document.createElement("LI");                    // Create a <li> node
    node.appendChild(textnode);                                 // Append the text to <li>
    document.getElementById("tasks").appendChild(node);     // let color = document.getElementById("colors").value
    input.style.color = 'blue'


});
  
});

