function closure1(message) {
  setTimeout(function () {
    console.log(message);
  }, 2000);
}

closure1("Im inside closure1 function block");

function closure2(message) {
  return function () {
    console.log(message);
  };
}

let res = closure2("Im inside closure2 function block");
res();

// Closure
// --> Functions inside a function is called closures in javascript
// --> The inner function can remember the variables of it's parent function even after execution of the outer function.
