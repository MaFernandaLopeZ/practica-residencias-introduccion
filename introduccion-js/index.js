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
const myGlobal = 10;

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

function addFive() {
    sum = sum + 5;
}
addThree();
addFive();

// --------------------------------------------------
//ASIGNACION CON UN VALOR DEVUELTO
// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

// --------------------------------------------------
//HACER COLA
/*Escriba una función nextInLineque tome una matriz ( arr)
 y un número ( item) como argumentos.
Agregue el número al final de la matriz, luego elimine el 
primer elemento de la matriz.
La nextInLinefunción debería devolver el elemento que 
se eliminó.*/
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
}
console.log(nextInLine([], 5));
console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5, 6, 7, 8, 9], 1));

// Setup
const testArr = [1, 2, 3, 4, 5];

//-----------------------------------------------------
//VALORES BOOLEANOS
//Modifique la welcomeToBooleansfunción para que regrese trueen lugar de falsecuando se hace clic en el botón Ejecutar.
function welcomeToBooleans() {
    return true; // Change this line
}

//DECLARACIONES IF
//Cree una ifdeclaración dentro de la función para devolver Yes, that was truesi el parámetro wasThatTruees truey devolver en No, that was falsecaso contrario.
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return "Yes, that was true";
    } else {
        return "No, that was false";
    }
}

// IGUALDAD
// Agregue el operador de igualdad a la línea indicada para que la función devuelva la cadena Equalcuando valsea equivalente a 12.
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

// --------------------------------------------------
// IGUALDAD ESTRICTA
// Utilice el operador de igualdad estricta en la ifinstrucción para que la función devuelva la cadena Equalcuando valsea estrictamente igual a 7.
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);