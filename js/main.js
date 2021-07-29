var btn = document.querySelector("#first_btn");
var button = document.querySelector("#second_btn");

function myFunction() {
  alert("Game not found.");
}

function theButton() {
  prompt("Enter your score.");
}

btn.addEventListener("click", myFunction);
button.addEventListener("click", theButton);
