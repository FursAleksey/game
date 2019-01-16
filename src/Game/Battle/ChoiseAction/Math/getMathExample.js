function getExample() {
  const operations = ['+', '-', '/', '*'];
  const firstNumber = Math.round(0 - 0.5 + Math.random() * (100 + 1));
  const secondNumber = Math.round(0 - 0.5 + Math.random() * (100 + 1));
  const operation = operations[Math.round(0 - 0.5 + Math.random() * (operations.length - 1 + 1))];
  let result;
  switch (operation) {
    case '+': result = firstNumber + secondNumber; break;
    case '-': result = firstNumber - secondNumber; break;
    case '/': result = firstNumber / secondNumber; break;
    case '*': result = firstNumber * secondNumber; break;
    default: break;
  }
  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operation: operation,
    result: result
  }
}

export default getExample;
