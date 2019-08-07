
document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("input[type=submit]").addEventListener("click", function(event){
      event.preventDefault();
      const wordInput = document.querySelector("input[type=text]")
      const textNode = document.createTextNode(wordInput.value)
      const node = document.createElement("LI")
      node.appendChild(textNode)
    
      const newTask = document.querySelector("ul#tasks")
      document.getElementById("tasks").appendChild(node)

      const xButton = document.createElement("BUTTON")
      xButton.textContent = "X"
      node.appendChild(xButton)
      // delete the node?
    })
});
