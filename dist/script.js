function domLoaded() {
   let addBtn = document.getElementById("add-btn");
   let textbox = document.getElementById("new-task");

   addBtn.addEventListener("click", addBtnClick);

   textbox.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });

   let doneBtns = document.querySelectorAll(".done-btn");
   for (let i = 0; i < doneBtns.length; i++) {
      doneBtns[i].addEventListener("click", removeTask);
   }
}

function addBtnClick() {
   let textbox = document.getElementById("new-task");
   let text = textbox.value;

   if (text !== "") {
      addTask(text);
      textbox.value = "";
   }

   textbox.focus();
}

function addTask(task) {
   let li = document.createElement("li");
   li.innerHTML = '<span class="task-text">' + task + '</span><button class="done-btn">&#10006;</button>';

   let list = document.querySelector("ol");
   list.appendChild(li);

   let buttons = document.querySelectorAll(".done-btn");
   buttons[buttons.length - 1].addEventListener("click", removeTask);
}

function removeTask(event) {
   let li = event.target.parentNode;
   let list = li.parentNode;
   list.removeChild(li);
}

window.addEventListener("DOMContentLoaded", domLoaded);