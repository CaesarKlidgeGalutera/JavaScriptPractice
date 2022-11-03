myNum = +prompt("Enter Number"); //the plus operator besides prompt converts it to a number type

function seeMyNum() {
  if (myNum < 5) {
    return "Tiny";
  } else if (myNum < 10) {
    return "Small";
  } else if (myNum < 15) {
    return "Medium";
  } else if (myNUm < 20) {
    return "Large";
  } else NUM >= 20;
  return "Huge";
}

console.log(seeMyNum());
