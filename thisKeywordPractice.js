console.log("----Example 1----");

myLetter = "a";
console.log(this.myLetter); // this.a will points to the global object, a.

console.log("----Example 2----");
//"this" keyword behaves differently inside a function

myNumber = 5; //global variable, property of the window object

function getNumber() {
  console.log(this.myNumber);

  /*"this" keyword inside a function will target it's parent function
    in this case, the parent object is the window object that's why the output in 
    the console is 5
    */
}

getNumber();

console.log("----Example 3----");

let myObj = {
  myItem: "Pencil",
  getItem: function () {
    console.log(this.myItem);
  },
};

myObj.getItem();
/*"this" keyword is inside a function, because of that, it targeted the immediate parent
which is the myObj object*/

console.log("----Example 3----");

let myFruitList = {
  myFruit: "Apple",
  getFruit: function () {
    let nestedFunction = () => {
      console.log(this.myFruit);
    };
    nestedFunction();
  },
};

//put arrow function inside a normal function to access the global variable of the object where you defined the normal function

myFruitList.getFruit();

/*A normal function takes assigns value of "this" to the immediate object parent, while
Arrow function takes the value of "this" from the parent normal function. */

/*SO an arrow function will find a normal function first, and look what is the immediate parent
of that normal function.*/

console.log("----Example 4----");
//"this" in a class

class myClass {
  constructor(userName) {
    this.myName = userName;
  }

  getName = () => {
    console.log(this.myName);
  };

  /*arrow function or normal function, "this" keyword will take the value of what's inside the constructor
  if it's inside a class*/
}

const user = new myClass("Klidge");
user.getName();
