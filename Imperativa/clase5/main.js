const prompt = require("prompt-sync")({ sigint: true });

/*

function cantarCumpleanios(persona){
    console.log ("feliz cumpleaños " + persona);
}

let nombre = prompt("Ingresa tu nombre:");
cantarCumpleanios(nombre);
*/


/*
function multiplicador (a,b = 2){
    console.log ( a * b);
}
multiplicador(5);
*/

/*
function multiplicador (a,b = 2){
    console.log ( a * b);
}
multiplicador(5, 3);
*/


/*
para obtener un lugar con undifined como resultado

function cuadrado (numero){
    console.log(numero * numero);
}
console.log("El resultado de 4, es : " + cuadrado(4));
*/


/*
//para actualizar el valor al final con el return

function cuadrado (numeroCuadrado){
    console.log("Hola chicos");
    return (numeroCuadrado * numeroCuadrado);
}
cuadrado(4);
console.log("El resultado de 4, es : " + cuadrado(4));
*/

//para hacer una sola linea!!!!!!!
//let sumar = (a, b) => {return a + b }
//sumar (2, 5)


//ya se conoce que tienen algo que retornar
let sumar = a => a + 2

