/* Cree una función timesFiveque acepte un argumento,
lo multiplique por 5y devuelva el nuevo valor.*/

function timesFive(param1) {
    return param1 * 5;
}

timesFive(5);
timesFive(2);
timesFive(0);

console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));

// --------------------------------------------------
// ALCANCE GLOBAL Y FUNCIONES
// Declare the myGlobal variable below this line
const myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

// --------------------------------------------------
//AMBITO LOCAL Y FUNCIONES
/*El editor tiene dos console.logs para ayudarlo a ver
 lo que está sucediendo. Revisa la consola mientras 
 codificas para ver cómo cambia. Declare una variable
  local myVardentro myLocalScopey ejecute las pruebas.*/
function myLocalScope() {
    // Only change code below this line
    const myVar = "hola";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);

// --------------------------------------------------
//AMBITO GLOBAL FRENTE A LOCAL EN FUNCIONES
//Agregue una variable local a la myOutfitfunción para anular el valor de outerWearcon la cadena sweater.
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit();

// --------------------------------------------------
/*Crea una función addFivesin argumentos. 
Esta función suma 5 a la sumvariable, pero su valor 
devuelto es undefined.*/
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive(){
  sum = sum + 5;
}
addThree();
addFive();