let nums = 100;

function printNum() {
  var num = 200; // Scoped inside this function
  let num1 = 300;
  const num2 = 400;

  console.log(num);
  console.log(num1);
  console.log(num2);
}

printNum();
num = 3033;
console.log(num); // 3033 as it is changed because it is in global scope
console.log(num1); // Not defined
console.log(num2); // Not defined
console.log("Var", nums); // Global Scope
