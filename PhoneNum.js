//This function creates a number with a format "(xxx) xxx-xxxx"
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function formatNumber(numbers) {
  format = "(xxx) xxx-xxxx";

  for (let x = 0; x <= numbers.length - 1; x++) {
    format = format.replace("x", numbers[x]);
  }

  return format;
}

console.log(formatNumber(numbers));
