function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.add = function () {
  return `The sum is ${this.a + this.b}`;
};

let calc = new Calculator(5, 5);
console.log(calc.add());

// Prototypes are objects which are embedded in Objects and also created when instances are created, so that we can add our custom functions in the prototype and we can reuse it in our project
