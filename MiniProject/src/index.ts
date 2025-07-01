const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("SUBMITTED!");
})
// btn.addEventListener("click", function () {
//     alert(input.value);
//     input.value = "";

// });

