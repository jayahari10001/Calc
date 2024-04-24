document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const clearBtn = document.querySelector(".clear");
    const calculateBtn = document.querySelector(".calculate");
    const numberBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator");
  
    let expression = "";
  
    function updateDisplay() {
      display.value = expression;
    }
  
    function clear() {
      expression = "";
      updateDisplay();
    }
  
    function calculate() {
      try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
      } catch (error) {
        display.value = "Error";
      }
    }
  
    clearBtn.addEventListener("click", clear);
    calculateBtn.addEventListener("click", calculate);
  
    numberBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        expression += this.value;
        updateDisplay();
      });
    });
  
    operatorBtns.forEach(btn => {
      btn.addEventListener("click", function() {
        if (expression !== "" && !isNaN(expression[expression.length - 1])) {
          expression += this.value;
          updateDisplay();
        }
      });
    });
  });
  