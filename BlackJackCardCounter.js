/*This code will count cards
when you see a low card, the count goes up
if user sees high card, the count goes up
if user's card is middle value, the count stays the same
when the count is positive, the user should bet high
and when the count is 0 or negative, the user should bet low
*/

count = 0;
bet = 0;

function cardCount(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    default:
      "Enter a value within the card's range only";
  }

  let holdbet = "Hold";

  if (count > 0) {
    holdbet = "bet";
  }
  return count + " " + holdbet;
}

cardCount(prompt("Enter first card"));
cardCount(prompt("Enter second card"));
cardCount(prompt("Enter third card"));

console.log(cardCount(prompt("Enter Final Card")));
