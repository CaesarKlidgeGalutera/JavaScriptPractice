/*
This program is a queue that ask user to input a number and adds it to the array.
Every input is printed to the console.

A queue removes item in front and adds new item at the back of the queue

*/
let myArray = [1, 2, 3, 4, 5];
let userChoice;
let isYes = true;

function nextNum(array, nextItem) {
  array.push(nextItem); //push() adds element to the right of the array
  return array.shift(); //shift() removes the first element of the array
}

do {
  let userInput = prompt("Next Number?", myArray[myArray.length - 1] + 1);

  console.log("Removed element: " + nextNum(myArray, parseInt(userInput)));

  console.log("New array elements: " + JSON.stringify(myArray)); //JSON.stringify converts the array to string

  let userChoice = prompt("Continue? ", "yes");
  userChoice === "yes" ? (isYes = true) : (isYes = false);
} while (isYes === true);

//unshift() adds new element to the left of the array
