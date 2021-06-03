const sum = (a, b) => a + b;

const maxNumber = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

const getSum = (a, b) => {
  let result = a + b;
  return result;
};

function Car() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(() => console.log(this.speed), 1000);
  };
}

let car = new Car();
car.speedUp(50); // This prints the value as it references the lexical scope of "this"

function Bike() {
  this.speed = 0;
  this.speedUp = function (speed) {
    this.speed = speed;
    setTimeout(function () {
      console.log(this.speed);
    }, 1000);
  };
}

let bike = new Bike();
bike.speedUp(50); // This doesn't prints the value as it is noral function which redefines the "this" reference"

// Arrow Functions --> Arrow functions are same like normal functions but has more clean syntax when compared to normal functions;

// Differences:
//     * Arrow Functions have lexical scope, whereas normal functions have global scope and "this" keyword refers to the global scope in normal functions.

//     * In arrow functions "this" is not redefined as it references it's lexical scope

//     * Arrow functions can have implicit return statements if it has one expression inside function body

//     * Arrow functions cannot be made as constructors as it
