let selectedOperator = "";
    let selectedButton = null;

    function setOperator(op, btn) {
      selectedOperator = op;

      if (selectedButton) {
        selectedButton.classList.remove("selected");
      }

      selectedButton = btn;
      selectedButton.classList.add("selected");
    }

    function showResult() {
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const resultDiv = document.getElementById("resultText");

      if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "❗ Please enter both numbers.";
        return;
      }

      if (!selectedOperator) {
        resultDiv.textContent = "❗ Please select an operation.";
        return;
      }

      if (selectedOperator === "/" && num2 === 0) {
        resultDiv.textContent = "❗ Cannot divide by zero.";
        return;
      }

      const result = eval(`${num1} ${selectedOperator} ${num2}`);
      resultDiv.textContent = `Result: ${num1} ${selectedOperator} ${num2} = ${result}`;
    }