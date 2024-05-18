function processArray(numbers) {
  return numbers.map(num => {
    if(num % 2 === 0) {
    return num **2;
  } else {
    return num * 3;
  }
  })
}

function formatArrayStrings(strings, processedNumbers)
{
  return strings.map((string, i) => {
    const number = processedNumbers[i];
    if(number % 2 === 0) {
      return string.toUpperCase();
    } else {
      return string.toLowerCase();
    }
  });
}
export {processArray, formatArrayStrings}

