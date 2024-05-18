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

const numbers = [1, 2, 3, 4, 5];
const strings = ['hello', 'world', 'foo', 'bar', 'baz'];
const processedNumbers = processArray(numbers);
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);
