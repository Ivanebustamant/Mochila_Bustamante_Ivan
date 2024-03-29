/* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

*/

let misMascotas = [
    {
      nombre: "Max",
      raza: "Labrador",
      edad: 4,
      sonido: "Guau",
      repetirSonido: function() {
        return this.sonido + " " + this.sonido;
      }
    },
    {
      nombre: "Mia",
      raza: "Siames",
      edad: 7,
      sonido: "Miau",
      repetirSonido: function() {
        return this.sonido + " " + this.sonido;
      }
    },
    {
      nombre: "Paco",
      raza: "Cotorra",
      edad: 12,
      sonido: "Hola",
      repetirSonido: function() {
        return this.sonido + " " + this.sonido;
      }
    }
  ];
  

    // Acceder a propiedades y métodos de los objetos
    console.log(misMascotas[0].nombre); // Imprimirá "Max"
    console.log(misMascotas[1].raza); // Imprimirá "Siames"
    console.log(misMascotas[2].repetirSonido()); // Imprimirá "Hola Hola"

function aumentarEdad(misMascotas){
    for(let i =0 ; i<misMascotas.length ; i++ ){
        misMascotas[i].edad++;
    }
}

//aumentarEdad(misMascotas)
//console.log(misMascotas)


function aumentarEdadUNO(misMascotas){
    for(let i =0 ; i<misMascotas.length ; i++ ){
        if(misMascotas[i].edad < 6){
            misMascotas[i].edad+=1;
        } else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10){
            misMascotas[i].edad+=2;
        } else {
            let variable = (misMascotas[i].edad)/2;
            misMascotas[i].edad+=variable;
        }
    }
}

//aumentarEdadUNO(misMascotas)
//console.log(misMascotas)


function asignarID(misMascotas){
    let id = 1;
    for(let i = 0 ; i<misMascotas.length ; i++){
        misMascotas[i].id = id;
        id++;
    }
}

asignarID(misMascotas)
console.log(misMascotas)