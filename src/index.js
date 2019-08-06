document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submit").addEventListener(
    "click",
    function(event) {
      event.preventDefault();
      // do other things here
      let list = document.querySelector("#tasks");
      let value = document.querySelector("#new-task-description").value;
      let term = document.querySelector("#new-task-description");

      // make li
      let li = document.createElement("li");
      let span = document.createElement("span");
      let button = document.createElement("button");
      button.style.display = "inline-block";
      button.innerText = "x";
      span.append(li);
      span.append(button);
      // add button to span
      li.innerText = value;
      list.append(span);

      // clear contents of bar
      term.value = "";

      // add listener for button
      button.addEventListener("click", function(e) {
        button.parentNode.remove();
      });
    },
    false
  );
});
