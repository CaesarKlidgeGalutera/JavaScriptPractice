//This code lets user input the number of strokes done and par, then returns a nickname

var nickNames = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return nickNames[0];
  } else if (strokes <= par - 2) {
    return nickNames[1];
  } else if (strokes === par - 1) {
    return nickNames[2];
  } else if (strokes === par) {
    return nickNames[3];
  } else if (strokes === par + 1) {
    return nickNames[4];
  } else if (strokes === par + 2) {
    return nickNames[5];
  } else if (strokes >= par + 3) {
    return nickNames[6];
  }
}

numStrokes = +prompt("Enter strokes");
numPar = +prompt("Enter Par");
console.log(golfScore(numPar, numStrokes));
