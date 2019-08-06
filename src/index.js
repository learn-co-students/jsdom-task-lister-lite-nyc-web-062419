document.addEventListener("DOMContentLoaded", () => {
    let i = 0
    document.querySelector('input[id=submit]').addEventListener("click", function(event){
      event.preventDefault() 
      i++
      const t = document.getElementById("new-task-description").value
      // console.dir(d)
      const taskbar = document.getElementById('tasks')
      taskbar.innerHTML +=
      `<li><p id=${i}>${t}</p><button type="button" onclick="return this.parentNode.remove();" class="remove">X</button>
      </div>`
 
  })

});
