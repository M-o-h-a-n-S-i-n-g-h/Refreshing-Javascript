// Function declaration without return statement
function print(message) {
  console.log(message);
}

// Function declaration with return statement
function multiply(a, b) {
  return a * b;
}

// Funtion with "arguments" object
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

//Function calling expression
print('Learning today');

let product = multiply(5, 10);
console.log(product);

let sum = add(5, 10);
console.log(sum);
