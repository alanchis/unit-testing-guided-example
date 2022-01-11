console.log("hola mundo")


function sum(a, b) {

  if(!a && !b ) {
    return 0
  }
  
  // EN CASO DE QUE EL SEGUNDO ARGUMENTO NO EXISTA
  if(!b) {
    b = 0
  }


  const total = a + b

  return total;
}

function subtract(a, b) {
 
  if(!a && !b ) {
    return 0
  }

  if (!b) {
    b = 0
  }
 
  return a - b;
}

function divide(a, b) {
  

if (b === 0) {
  return error("division entre 0")
}
  
  const total = a / b
  return total;

}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
