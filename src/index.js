document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("input[type =submit]").addEventListener("click", function (event) {
    event.preventDefault();
    let item = document.querySelector("input[type=text]").value
    let node = document.createElement('LI')
    let button = document.createElement("button")
    button.append("X")
    button.id = item
    node.append(item, button)
    node.id = item
    document.querySelector("#list").appendChild(node)

    // document.querySelector("#list").addEventListener("click", function(event){
    //   let el = document.querySelector(`li#${event.target.id}`)
    //   el.remove()
    // })
  })
  document.querySelector("#list").addEventListener("click", function(event){
    if (event.target.localName === "button"){
      document.querySelectorAll("li").forEach(function(li){
        if (li.id === event.target.id){
          li.remove()
        }
      })  
    }
    
  })
});
