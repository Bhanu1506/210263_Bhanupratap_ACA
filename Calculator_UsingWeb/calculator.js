function appendExpression(value) {
    document.getElementById('result').value += value;
  }
  
  function removeLastChar() {
    let result = document.getElementById('result').value;
    result = result.slice(0, -1);
    document.getElementById('result').value = result;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    let expression = document.getElementById('result').value;
    try {
      const result = eval(expression);
      if (result === undefined || isNaN(result)) {
        throw new Error('Invalid expression');
      }
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  