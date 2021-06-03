const numbers = [2, 4, 7, 1, 3, 5];
console.log(...numbers);

const name = "MohanSingh";
console.log(...name);

const min = Math.min(...numbers);
console.log(min);

const mix = [...numbers, ...name];
console.log(mix);

// OBJECTS

const godZilla = { nuclearPower: true, swimmer: true };
const kong = { handPower: true, runner: true };

const kongZilla = { ...godZilla, ...kong };
console.log(kongZilla);

// Spread operator is applied and used in function calls, arrays and objects and all Iterable Objects in javascript.

// Using Spread Operator we can iterate an iterable object and pass to a function or access single elements
