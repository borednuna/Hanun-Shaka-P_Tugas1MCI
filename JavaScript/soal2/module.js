const arithmetic = (expression) => {
  let result = 0;
  let operands = expression.split(" ");
  
  for (let i = 0; i < operands.length; i++) {
    if (i == 0) {
      result = parseInt(operands[i]);
    } else {
      switch (operands[i]) {
        case "+":
          result += parseInt(operands[i + 1]);
          break;
        case "-":
          result -= parseInt(operands[i + 1]);
          break;
        case "*":
          result *= parseInt(operands[i + 1]);
          break;
        case "/":
          result /= parseInt(operands[i + 1]);
          break;
      }
    }
  }

  return result;
}

module.exports = {arithmetic};
