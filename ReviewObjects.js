let myObject = {
  //We use properties to access the data of an object

  // properties are anything after the braces
  //propertyName : value,

  color: "black",
  size: "Medium",
  itemName: "Shirt",
};

//accessing the values of the object using dot notation

//This function checks if an object has its own property

function checkMyObjs(checkProp) {
  if (myObject.hasOwnProperty(checkProp)) {
    return myObject[checkProp];
  } else {
    return "not found";
  }
}

//console.log(checkMyObjs(prompt("Search a property")));

//Accessing properties of a nested objects

let myVehicle = {
  car: {
    color: "red",
    type: "suv",
  },
  motor: {
    color: "black",
    brand: "honda",
  },
};

//Use chains of dot notations to access properties of nested objects

console.log(myVehicle.car.color);

//Accessing properties of nested arrays

let mySubjects = [
  {
    subName: "PROGIT1",
    section: "IAB1",
    schedule: ["m", "w", "f"],
  },
  {
    subName: "WEBSYS1",
    section: "IAB1",
    schedule: ["t", "th"],
  },
];

console.log(mySubjects[1].schedule[1]);
