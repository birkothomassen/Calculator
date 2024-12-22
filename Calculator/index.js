const display = document.getElementById("display");

let added = false;

function appendToDisplay(input) {
  if (display.value == "ERROR") {
  } else {
    display.value += input;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "ERROR";
  }
}

function Clear() {
  display.value = "";
}
