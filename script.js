const updateBtn = document.getElementById("update-btn");
const clearBtn = document.getElementById("clear-btn");

const input = document.getElementById("name-input");
const display = document.getElementById("display-name");


updateBtn.addEventListener("click", function () {

  if (input.value === "") {
    alert("Please enter a name first!")
  } else {
    display.textContent = input.value;
  }
})

clearBtn.addEventListener("click", function () {
  input.value = "";
  display.textContent = "---";
})