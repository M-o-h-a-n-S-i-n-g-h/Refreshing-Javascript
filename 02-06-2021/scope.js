let language = "JavaScript";

function findScope() {
  language = "Javascript";
  runtime = "nodeJs";
  console.log("FindScope Function");
}

// In this inside findScope Funtion runtime is not declared so it searches for it in the outside scope and if it is not present it creates the variable in the global scope
