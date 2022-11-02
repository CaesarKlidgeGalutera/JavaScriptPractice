//This code is object calculator

let calculator = {
  read: function () {
    this.num1 = parseInt(prompt("Enter a number"));
    this.num2 = parseInt(prompt("Enter a second number"));
  },
  sum: function () {
    return this.num1 + this.num2;
  },

  mul: function () {
    return this.num1 * this.num2;
  },
  sub: function () {
    return this.num1 - this.num2;
  },
  div: function () {
    return this.num1 / this.num2;
  },
};

calculator.read();
console.log("Sum: " + calculator.sum());
console.log("Difference: " + calculator.sub());
console.log("Product: " + calculator.mul());
console.log("Quotient: " + calculator.div());
