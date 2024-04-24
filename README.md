# Ex.08 Design of a Standard Calculator
## Date: 24/04/2024

## AIM:
To design a web application for a standard calculator with minimum five operations.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for creating attractive colors.

### Step 4:
Write JavaScript program for implementing five different operations.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
calc.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Colorful Calculator</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
    
<div class="calculator">
    <h1 class = "name">E JAYAHARI(212221040065)</h1>  
  <input type="text" class="display" disabled>
  <div class="keys">
    <button class="operator" value="+" style="background-color: #ff5733;">+</button>
    <button class="operator" value="-" style="background-color: #ffd700;">-</button>
    <button class="operator" value="*" style="background-color: #ff6347;">*</button>
    <button class="operator" value="/" style="background-color: #20b2aa;">/</button>
    <button class="operator" value="%" style="background-color: #57f548;">%</button>
    <button class="operator" value="^" style="background-color: #20b2aa;">^</button>
    <button class="operator" value="(" style="background-color: #20b2aa;">(</button>
    <button class="operator" value=")" style="background-color: #20b2aa;">)</button>
    <button class="number" value="9">9</button>
    <button class="number" value="8">8</button>
    <button class="number" value="7">7</button>
    <button class="number" value="6">6</button>
    <button class="number" value="5">5</button>
    <button class="number" value="4">4</button>
    <button class="number" value="3">3</button>
    <button class="number" value="2">2</button>
    <button class="number" value="1">1</button>
    <button class="number" value="0">0</button>
    <button class="clear" style="background-color: #708090;">C</button>
    <button class="calculate" style="background-color: #32cd32;">=</button>
  </div>
</div>
<script src="script.js"></script>
</body>
</html>

styles.css

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff;
  }
  
  .calculator {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    background-color: #87ceeb; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .display {
    width: calc(100% - 70px);
    padding: 40px;
    margin-bottom: 10px;
    font-size: 50px;
    text-align: right;
  }
  
  .keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  button {
    padding: 90px;
    font-size: 50px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #eee;
  }
  
  button:hover {
    background-color: #ddd;
  }
  
  .name {
    text-align:center;
    font-size: 50px;
  }

script.js

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
  
```

## OUTPUT:
![alt text](<Screenshot 2024-04-24 094321.png>)
![alt text](<Screenshot 2024-04-24 094343.png>)
## RESULT:
The program for designing a standard calculator using HTML and CSS is executed successfully.
