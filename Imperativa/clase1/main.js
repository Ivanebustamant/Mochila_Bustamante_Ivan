// variables y tipos de datos. string, number, boolean, null, undefined. Arreglos, funciones, objetos.

/* 


*/
// variables y tipos de datos: Una Variable es un contenedor que guarda información para, luego, usarla.
//tipo de valores de variables pueden ser: string, number, boolean, undefined, null. Para creacion de variables voy a utilizar la palabra reservada let y const

//string - Los Strings son cadenas de caracteres. Para que JS los reconozca como tal, el texto debe escribirse entre comillas dobles ("") o simples ('').
let nombre = "Luciano";

//number - numerico - Los Números son uno de los valores primitivos de JavaScript.

let edad = 27;

//booleanos
let hayAsado = true;
let hayEnsalda = false;

//undefined
let perro;

perro = "limon";

/* 
formatos de codigo:

camelCase 
snake_case 
kebab-case 
*/
/* 

los datos pueden ser primitivos o pueden ser más complejos, como son las Funciones y los Objetos, arreglos. 
Ahora, nos enfocaremos en los valores primitivos:

Números: Funcionan igual que en la matemática. Pueden ser números enteros o racionales. Se pueden sumar, restar, multiplicar o dividir y siguen la lógica de resolución que privilegia las operaciones dentro de los paréntesis para luego resolver el resto.

Strings: Son cadenas de caracteres que incluyen letras, números y espacios. Debemos encerrarlos entre comillas simples (‘’) o dobles ("") para que JS entienda que es texto y no la confunda con una Variable.

Booleanos: Son datos de tipo true (verdadero) o false (falso), es decir, que activan o desactivan cierta parte del programa según el input recibido.

Undefined: Es un valor que posee una Variable que está sin definir en ese momento.

Null: Es un valor que posee una Variable que está explícitamente vacía (y hay una razón para ello).

Si pensamos en una Variable como una caja, el valor undefined indica que la caja está vacía (hasta que le demos contenido).

En cambio, en el caso de null, el programador le asignó explícitamente el valor para que la caja permanezca vacía.


En resumen:

var: Es una forma más flexible para crear una Variable ya que nos permite volver a crearla y reemplazar la anterior. var no se utiliza más, por lo que no es buena práctica usarla

let: Permite actualizar una Variable pero no volver a crearla.
const: Permite crear una Variable que se mantendrá constante durante todo el programa. Es decir, no se podrá actualizar ni cambiar.

*/

/*existe lacomparacion estricta y otro tipo */



let edad2 = 27;

if(10 == 15){

}


/*
el o es con ||
*/

true || true
true || false
false || true
false || false

/*el y es con && */

/** el de desigual es con != */



/** es direfenrcia blanca y estrica
 blanda (!=)     o Estrica (!==)

 */


 /*el cero es un tipo de dato booleano falso si es ta asi solo, el 0 
 el 1 es el booleano tambien */


 let anios = 10;
 let nombre3 = "Juan";
 let esMayor = false;

 console.log(anios);
 console.log(nombre3);
 console.log(esMayor);
//----
 console.log(anios + nombre3 + esMayor);
 console.log(`${anios}${nombre3}${esMayor}`);

//Variables de mario


 let puntos = 0;
 let cantidadDeMonedas = 0;
 let nivel = 1;
 let cantidadDeVidas = 3;
 let honguitosDeMario = 5;
 let jugador = "Ivan";

 //Variables de una persona

 let diaDeNacimiento = 20;
 let anioDeNacimiento = 1995;
 let nombre5 = "Luciano";
 let estaVivo = true;

 let comparacion = (cantidadDeVidas == 0);
console.log(`la respuesta es ${comparacion}`);


let valor = cantidadDeVidas--;
let comparacion2 = (cantidadDeVidas == 0);
console.log(`la respuesta a la comparacion si el personaje esta muerto es : ${comparacion2}`);



/*npm i prompt-sync */

/* const prompt = require("prompt-sync")({ sigint: true }); */



 /**
  * mismo contenido y tipo de dato la comparacion estrica a comparacion blanda 
  */