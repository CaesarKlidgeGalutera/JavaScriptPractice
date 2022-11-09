for (let x = 1; x <= 100; x++) {
  if (x % 5 === 0 && x % 3 === 0) {
    console.log("fizzbuzz");
  } else if (x % 5 === 0 && x % 3 !== 0) {
    console.log("buzz");
  } else if (x % 3 === 0 && x % 5 !== 0) {
    console.log("fizz");
  } else {
    console.log(x);
  }
}

/*This program logs fizz if it's divisible by 3, 
it logs buzz if it is divisible by 5, and logs fizzbuzz
if it is divisible by both 5 and 3
*/


//This gives a chess board pattern
size = 8;
let sign = "#";

for (var y = 0; y < size; y++) {
  var str = " ";

  for (var x = 0; x < size; x++) {
    str += (y + x + 1) % 2 ? " " : "#";
  }

  console.log(str);
}
