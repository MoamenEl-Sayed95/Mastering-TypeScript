"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!");
    var newTodoText = input.value;
    var newLi = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(newTodoText);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//     alert(input.value);
//     input.value = "";
// });
