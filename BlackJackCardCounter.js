/*This code will count cards
when you see a low card, the count goes up
if user sees high card, the count goes up
if user's card is middle value, the count stays the same
when the count is positive, the user should bet high
and when the count is 0 or negative, the user should bet low
*/

count = 0;

function cardCount(card) {
  switch (card) {
    case 2:
      this.count + 2;
      break;
    case 3:
      this.count + 3;
      break;
    case 4:
      this.count + 4;
      break;
    case 7:
      this.count + 7;
      break;
    case "K":
      this.card + 10;
      break;
    case "A":
      this.card + 1;
      break;
    default:
      "Enter a value within the card's range only";
  }
}

cardCount(prompt("Enter card"));
console.log(count);
