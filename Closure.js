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
