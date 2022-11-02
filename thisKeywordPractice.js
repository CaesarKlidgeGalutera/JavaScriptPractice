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

console.log("----Example 5----");

function makeUser() {
  return {
    name: "Klidge",
    getName() {
      return this;
    },
  };
}
console.log(makeUser().getName().name);

console.log("----Example 6----");

this.name = "Callback Function";

const userMe = {
  name: "Caesar Klidge",
  logMessage() {
    console.log(this.name);
  },
};

//setTimeout(userMe.logMessage,1000); //This is a call back function, it copies the logMessage function as a parameter, and it doesn't have access anymore in userMe object, instead it has access on window object

userMe.logMessage(); //since we call it as a function, this is now binded in the userMe object

console.log("----Example 7----");

myName = "Lucy"; //global

const yourUser = {
  myName: "Daisy",

  greet() {
    return "Hello, " + this.myName + "!";
  },

  farewell: function () {
    let myNested = () => {
      console.log(this.myName);
    };
    myNested();
  },
};

console.log(yourUser.greet());
yourUser.farewell();

console.log("----Example 8----");

length = 2;

const object = {
  length: 4,
  method: function () {
    function you() {
      console.log(this.length);
    }
    you(); //since this is not an arrow function, its parent is window object, output is 1
  },
};

object.method();

console.log("----Example 8----");

function callback() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method() {
    arguments[0]();
  },
};

object2.method(callback, 2, 3);
