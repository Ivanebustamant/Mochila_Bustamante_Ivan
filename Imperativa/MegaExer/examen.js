/**
 * Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son: 
Si ambos son tipo de dato Number deberá retornar su multiplicación. 
Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
Si ambos son tipo de dato Booleano deberán retornar false.
 */


function verificacionTipo(valorUno, valorDos) {
    let resultado;

    if (valorUno - valorUno === 0 && valorDos - valorDos === 0) {
        resultado = valorUno * valorDos;
    } else if (valorUno + '' === valorUno && valorDos + '' === valorDos) {
        resultado = valorUno + valorDos;
    } else if ((valorUno === true || valorUno === false) && (valorDos === true || valorDos === false)) {
        resultado = false;
    }
    return resultado;
}

console.log(verificacionTipo(2, 3));           
console.log(verificacionTipo("Hola, ", "mundo"));  
console.log(verificacionTipo(true, false));    
console.log(verificacionTipo("Hola", 5));    


/**
 * Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
nombre 
apellido
edad
esArgentino (bool)

 */
let ciudadano = 
[ 
    {nombre: "Jorge", 
    apellido: "Vargas",
    edad: 25,
    esArgentino: true,
    },
    {nombre: "Natalia", 
    apellido: "Venegas",
    edad: 29,
    esArgentino: false,
    },
    {nombre: "Paola", 
    apellido: "Gonzalez",
    edad: 10,
    esArgentino: true,
    }
]

/**
 * Si la edad es mayor o igual a 18 años y es argentino, retornará una frase que diga: 
 * [nombre] [apellido] vive en Argentina y es mayor de edad.
 */

function parametroUno(arregloEvaluadoUno){
    for(let i = 0; i < arregloEvaluadoUno.length; i++){
        if(arregloEvaluadoUno[i].edad >= 18 && arregloEvaluadoUno[i].esArgentino == true){
            console.log(arregloEvaluadoUno[i].nombre + ' ' + arregloEvaluadoUno[i].apellido + ' '+ "vive en Argentina y es mayor de edad");
        }
    }    
}

parametroUno(ciudadano)

/**
 * Si es mayor de edad pero no es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y es mayor de edad.
 */

function parametroDos(arregloEvaluadoDos){
    for(let i = 0; i < arregloEvaluadoDos.length; i++){
        if(arregloEvaluadoDos[i].edad >= 18 && arregloEvaluadoDos[i].esArgentino == false){
            console.log(arregloEvaluadoDos[i].nombre + ' ' + arregloEvaluadoDos[i].apellido + ' '+ " No vive en Argentina y es mayor de edad");
        }
    }    
}

parametroDos(ciudadano)


/**
 * Si NO es mayor de edad pero es argentino, retornará una frase que diga: [nombre] [apellido]  vive en Argentina y NO es mayor de edad.
 */

function parametroTres(arregloEvaluadoTres){
    for(let i = 0; i < arregloEvaluadoDos.length; i++){
        if(arregloEvaluadoTres[i].edad < 18 && arregloEvaluadoTres[i].esArgentino == true){
            console.log(arregloEvaluadoTres[i].nombre + ' ' + arregloEvaluadoTres[i].apellido + ' '+ "vive en Argentina y NO es mayor de edad");
        }
    }    
}

parametroTres(ciudadano)


/**
 * Si no es mayor ni es argentino, retornará una frase que diga: [nombre] [apellido] NO vive en Argentina y NO es mayor de edad.
 */

function parametroCuatro(arregloEvaluadoCua){
    for(let i = 0; i < arregloEvaluadoDos.length; i++){
        if(arregloEvaluadoCua[i].edad < 18 && arregloEvaluadoCua[i].esArgentino == false){
            console.log(arregloEvaluadoCua[i].nombre + ' ' + arregloEvaluadoCua[i].apellido + ' '+ "NO vive en Argentina y NO es mayor de edad");
        }
    }    
}

parametroCuatro(ciudadano)


/**
 * Realizar una función llamada verificacionDeTiposDeDatos que reciba dos valores por parámetro, 
 * estos pueden ser String o Booleano. Nuestra función deberá determinar si los valores recibidos 
 * son del mismo tipo sin utilizar typeof. 
 */

function verificacionDeTiposDeDatos(valorUno, valorDos) {
    let resultado;
    if (valorUno + '' === valorUno && valorDos + '' === valorDos) {
      resultado = console.log("Son de mismo tipo");
    } else if ((valorUno === true || valorUno === false) && (valorDos === true || valorDos === false)) {
        resultado = console.log("Son de mismo tipo");
    }
    return resultado;
}
        
console.log(verificacionDeTiposDeDatos("Hola, ", "mundo"));  
console.log(verificacionDeTiposDeDatos(true, false));    
console.log(verificacionDeTiposDeDatos("Hola", true));    


/**
 * 
 * Crear un array vacío llamado destinos. 
 */

const destinos = [];

/**
 * Dados estos tres objetos:
 */

let brasil = {
    cantidadDeVisitas : 3,
    clima: "soleado",
    habitantes: "212 millones"
   }

 let rusia = {
    cantidadDeVisitas : 4,
    clima: "frío",
    habitantes: "144 millones"
 }

 let estadosUnidos = {
  cantidadDeVisitas : 1,
  clima: "nublado",
  habitantes: "329 millones"
 }


 destinos.push(brasil);
 destinos.push(rusia);
 destinos.push(estadosUnidos);


 function visitas(arreglo){
    let nuevo;
    for(let i =0; i<arreglo.length;i++){
        nuevo += arreglo;
    }
 }