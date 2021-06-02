// var
function varType() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); //! i can be accessible outside the scope of for loop
}

// let
function letType() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); //! i can't be accessible outside of the scope of for loop
}

// const
function constType() {
  for (const i = 0; i < 5; i++) {
    console.log(i); // ! i can't be reassigned as it is incrementing
  }
  console.log(i);
}

// var --> It is function scoped
// let --> It is block scoped and can be modified
// const --> It is also block scoped and cannot be reassigned
