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

// --------------------------------------------------
// COMPARANDO DIFERENTES VALORES
//La compareEqualityfunción en el editor compara dos valores usando el operador de igualdad. Modifique la función para que devuelva la cadena Equalsolo cuando los valores sean estrictamente iguales.
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

// --------------------------------------------------
//OPERADOR DE DESIGUALDAD
//Agregue el operador de desigualdad !=en la ifinstrucción para que la función devuelva la cadena Not Equalcuando valno sea equivalente a 99.
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);
// --------------------------------------------------
//OPERADOR DE DESIGUALDAD ESTRICTA
//Agregue el operador de desigualdad estricta a la ifdeclaración para que la función devuelva la cadena Not Equalcuando valno sea estrictamente igual a 17
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);
// --------------------------------------------------
//OPERADOR DE MAYOR QUE
//Agregue el operador mayor que a las líneas indicadas para que las declaraciones de retorno tengan sentido.
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);
// --------------------------------------------------
//OPERADOR DE MAYOR QUE O IGUAL
//Agregue el operador mayor que o igual a las líneas indicadas para que las declaraciones de retorno tengan sentido.
function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);
// --------------------------------------------------
//OPERADOR DE MENOR QUE
function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);
// --------------------------------------------------
//OPERADOR DE MENOR QUE O IGUAL
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);
// --------------------------------------------------
//OPERADOR DE &&
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);
// --------------------------------------------------
//OPERADOR DE ||
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);
// --------------------------------------------------
//IF..else
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}

testElse(4);
// --------------------------------------------------
//if..else if..else
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

//***
function orderMyLogic(val) {
    if (val > 5 && val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);

//***
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num >= 5 && num < 10) {
        return "Small";
    } else if (num >= 10 && num < 15) {
        return "Medium";
    } else if (num >= 15 && num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}

testSize(7);
// --------------------------------------------------
//switch
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1: answer = "alpha"; break;
        case 2: answer = "beta"; break;
        case 3: answer = "gamma"; break;
        case 4: answer = "delta"; break;
    }
    return answer;
}

caseInSwitch(1);
// --------------------------------------------------
//switch con default
function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a": answer = "apple"; break;
        case "b": answer = "bird"; break;
        case "c": answer = "cat"; break;
        default: answer = "stuff";
    }
    return answer;
}

switchOfStuff(1);
// --------------------------------------------------
//switch con rangos
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3: answer = "Low"; break;
        case 4:
        case 5:
        case 6: answer = "Mid"; break;
        case 7:
        case 8:
        case 9: answer = "High"; break;
    }
    return answer;
}

sequentialSizes(1);
// --------------------------------------------------
function chainToSwitch(val) {
    let answer = "";
    switch (val) {
        case "bob": answer = "Marley"; break;
        case 42: answer = "The Answer"; break;
        case 1: answer = "There is no #1"; break;
        case 99: answer = "Missed me by this much!"; break;
        case 7: answer = "Ate Nine"; break;
    }

    return answer;
}

chainToSwitch(7);
// --------------------------------------------------
// OBJETOS
const myDog = {
    name: "duque",
    legs: 4,
    tails: 4,
    friends: ["Water", "Dogs"]
};

// LLER OBJETOS
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
//***
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj2["an entree"];
const drinkValue = testObj["the drink"];
//**
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;
const player = testObj3[playerNumber];

//Cambiar nombre a una propiedad del objeto
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

const newName = "Happy Coder";
//agregar una propiedad
myDog2["name"] = newName;
const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog3.bark = "guau";
//eliminar una propiedad
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog4.tails;

//funcion para buscar una propiedad en un objeto
function phoneticLookup(val) {
    let result = "";
    result = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = result[val];
    return result;
}

phoneticLookup("charlie");

//ver si existe una propiedad en un objeto
//.hasOwnProperty(propname) --> método de objetos para determinar si ese objeto tiene el nombre de propiedad dado
//.hasOwnProperty()devoluciones trueo falsesi la propiedad se encuentra o no.
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp) == true) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
}
// --------------------------------------------------

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------