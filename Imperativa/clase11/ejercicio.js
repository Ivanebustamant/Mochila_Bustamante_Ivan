/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

/*
function encontrarMultiplos(numUNO, numLIMITE){
    //let primero = numUNO;
    //let segundo = numDOS;
    const arreglo = [];
    for(let i = numUNO; i < numLIMITE; i++){
        if( i%numUNO === 0){
            arreglo.push(i);
        }
    }
    return arreglo;
}
let arr = encontrarMultiplos(5,50);

console.log(arr);


*/


/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO
// Crear arreglo de objetos estudiantes


let estudiante = 
[ 
    {nombre: "Juan Benitez", 
    notas: [90, 8, 10, 90, 75], 
    aprobado: true,
    calcularProm: function() {
        let nuevoCalculo = 0;
        for(let i = 0; i < this.notas.length; i++){
            nuevoCalculo += this.notas[i];
        }
        let promedio = nuevoCalculo /this.notas.length;
        return promedio;
    },
    aprobacion: function(){
      return this.aprobado = this.calcularProm() >= 70;
    },
}, {nombre: "Martha Juarez", 
    notas: [90, 80, 100, 90, 75], 
    aprobado: true,
    calcularProm: function() {
        let nuevoCalculo = 0;
        for(let i = 0; i < this.notas.length; i++){
            nuevoCalculo += this.notas[i];
        }
        let promedio = nuevoCalculo /this.notas.length;
        return promedio;
    },
    aprobacion: function(){
      return this.aprobado = this.calcularProm() >= 70;
    },
}, {nombre: "Angel Velez", 
notas: [75, 80, 67, 90, 99], 
aprobado: true,
calcularProm: function() {
    let nuevoCalculo = 0;
    for(let i = 0; i < this.notas.length; i++){
        nuevoCalculo += this.notas[i];
    }
    let promedio = nuevoCalculo /this.notas.length;
    return promedio;
},
aprobacion: function(){
  return this.aprobado = this.calcularProm() >= 70;
},
}, 

]

// Función para calcular el promedio de notas

// Función para determinar si el estudiante aprobó

// Calcular si los estudiantes aprobaron o no

for (let i = 0; i < estudiante.length; i++) {
    estudiante[i].aprobado = estudiante[i].aprobacion();
}

// Imprimir estado de aprobación de los estudiantes

for(let i = 0; i < estudiante.length; i++){
    console.log(estudiante[i].nombre + " - Aprobado: " + estudiante[i].aprobado);
}




/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO


let arregloTres =[3,4,6,2,3,23,23,54,33,34,5,88,45];
let i = 0;
let sumPar = 0;
while( i < arregloTres.length ){
    if (arregloTres[i]%2 === 0){
        sumPar+= arregloTres[i];
    }
    i++;
}
console.log(sumPar);



/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

//CODIGO



let arregloCuatro = [8,7,11];
function productosImpares(arreglo){
    let productoTota = 1;
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i]%2 !== 0 ){
            productoTota*= arreglo[i];
        }
    }
    return productoTota;
}
console.log(productosImpares(arregloCuatro));


/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/

//CODIGO

let vehiculo =[ 

    {marca: "ford", 
    modelo: "fiesta", 
    anio: 2004, 
    precio: 250000,
    impuesto: function(){
    if(this.anio < 2010){
        return this.precio * 0.1;
    } else{
        return this.precio * 0.05;
    }
} 
}

]

console.log("El impuesto a pagar por vehiculo: " + vehiculo[0].impuesto())