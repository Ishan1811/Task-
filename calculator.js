var display = document.querySelector(".display");
var buttons = document.querySelectorAll("button");

var currentNumber = "";
var operator = "";

for (var button of buttons) {
  button.addEventListener("click", function() {
    var value = button.value;

    if (value == "=") {
      // Calculate the result of the current calculation
      var result = eval(currentNumber + operator);
      display.value = result;
      currentNumber = "";
      operator = "";
    } else if (value == ".") {
      // Only allow one decimal point in the current number
      if (currentNumber.indexOf(".") == -1) {
        currentNumber += value;
      }
    } else {
      // Update the current number or operator
      if (operator == "") {
        currentNumber += value;
      } else {
        operator = value;
      }
    }
  });
}
