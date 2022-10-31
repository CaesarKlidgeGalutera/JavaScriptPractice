//Creating an object

//1st way
let person1 = new Object();

//Object properties
person1.name = "Klidge";
person1.age = 19;
person1.addAge = function () {
  return person1.age++;
};

//accessing the properties of the person1 obj
person1.addAge();

console.log("Name length: " + person1.name.length);

console.log("Age: " + person1.age);

//2nd way -- cleaner way to create objects in

let person2 = {
  //properties of person2 object
  name: "Luther",
  age: 22,
  addAge: function () {
    return person2.age++;
  },
};

person2.addAge();
console.log("Person2 age: " + person2.age);
