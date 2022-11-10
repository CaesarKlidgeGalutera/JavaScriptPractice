//Explaining closure

function outerFunction(outerVar) {
  return function innerFunc(innerVar) {
    console.log("Outer Var: " + outerVar);
    console.log("Inner Var: " + innerVar);
  };
}

const funct = outerFunction("Im outside");
//when we called the outerFunction here, it is already done executing, means that outerVar is no longer accessible

//but when we call the funct() function, innerFunc will keep track of outerVar because it still has access to variables outside the function, this is called closure
funct("Im inner");
/*-->
    Outer Var: Im outside
    Inner Var: Im inner
  */

//Closure means that a function has access to the outer variable even if the function is finised executing

//THIS FUNCTION TAKES TWO NUMBERS AND RETURN THE MINIMUM OF THE TWO ARGUMENTS
function takeMin(num1, num2) {
  return Math.min(num1, num2);
}

console.log(takeMin(2, 7));

//RECURSION
function isEven(givenNum) {
  if (givenNum < 0) {
    return `Number should be positive, and a whole number`;
  }
  if (givenNum === 0) {
    return true;
  }

  if (givenNum === 1) {
    return false;
  }
  return isEven(givenNum - 2);
}

console.log(isEven(-1));

//A function that counts capital B

function countBs(getStr) {
  let num0fBs = 0;
  for (let x = 0; x < getStr.length; x++)
    if (getStr[x] === "B") {
      num0fBs++;
    }
  return num0fBs;
}

console.log(countBs("Big balloon"));

//This function rturns
function countChar(str, choicechr) {
  let num0fBs = 0;
  let choosenChar = 0;
  for (let x = 0; x < str.length; x++) {
    if (str[x] === "B") {
      num0fBs++;
    }
    if (str[x] === choicechr) {
      choosenChar++;
    }
  }

  return `Number of Bs ${num0fBs}, number of chose char: ${choosenChar}`;
}

console.log(countChar("Big balloons", "l"));
