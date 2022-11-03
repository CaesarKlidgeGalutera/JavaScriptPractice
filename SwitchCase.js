//Switch case
inputNum = +prompt("Enter a number from 1-4");

function switchCase(userInput) {
  switch (userInput) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
    default:
      return "Select numbers from 1 - 4 only.";
  }
}

console.log(switchCase(inputNum));
