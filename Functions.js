let myName = "River Hudson"; //Global variable - can be accessed globaly or within the application

function person() {
  let myName = "Caesar Klidge"; //local scope variable - can only be accessed within the function
  surname = "Galutera"; // this is also a global variable because we did not use let or const keyword when we initialized the variable
  return myName;
}

//Accessing the global variables and local variables

console.log(myName); //Prints "River Hudson in the console"

console.log(person());
// myName in the global scope were overridden by the local scope "myName" inside the function person() because they have the same variable name

function person(userName) {
  // this is overloading, as they have the same function name but have one parameter
  let myName = userName;
  return myName;
}

console.log(person("Cymr")); //Calling the person function with one argument invokes the person function with one parameter

//Like in PHP, return in functions are not required.
function addNum() {
  sum = sum + 1;
  //the return value of this function is undefined as it does not have a return keyword
}


