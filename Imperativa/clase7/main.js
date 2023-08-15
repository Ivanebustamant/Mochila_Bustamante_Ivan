const prompt = require("prompt-sync")({ sigint: true });

/**
 * loops
 * 
 */


let pasajero =1;
while (pasajero <= 20){
    console.log("puede pasar, su asiento es el: " + pasajero);
    pasajero++;
}

/*
let temperatura = prompt("ingrese su temperatura");

if (temperatura < 37.5){
    console.log("Prioridad baja");
} else {
    console.log("prioridad alta");
}
*/


/*
let palabraMagica = "abrete sesamo!";
let intento = prompt("Indicame cual es la palabra magica:");

while(intento != palabraMagica){
    console.log("Esa palabra es incorrecta");
    intento = prompt("Intentalo de nuevo: ");
} 
console.log ("Bienvenido a la caverna de los 40 ladrones");
*/


/*
let i = 1;
let final = 5;
let acumuladores = 0;

while(i <= final){
    acumuladores += i;
    i++;
}
console.log(acumuladores);
//salio bien

*/


/*
let input;

while(!(input = prompt("Escriba su nombre por favor: "))){
    console.log("no recibimos la informacion");
}
console.log("su nombre es: " + input);
*/



/**
 * FOR LOOPS
 */


for(let i = 1; i <= 16; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("FIZZBUZZ");
    } else if (i % 3 === 0 ) {
        console.log("FIZZ")
    } else if (i % 5 === 0 ){
        console.log("BUZZ")
    } else {
        console.log(i);
    }
}
