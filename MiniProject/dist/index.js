"use strict";
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("SUBMITTED!");
});
// btn.addEventListener("click", function () {
//     alert(input.value);
//     input.value = "";
// });
