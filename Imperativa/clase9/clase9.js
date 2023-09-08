//Objetos

let heroe = {
    nombre: "Mario",
    trabajo:  "plomero"
};
heroe.nacionalidad = "Italiano"
console.log(heroe)

let auto = {
    marca: "ford",
    modelo:  "fiesta",
    nuevo: true,
    arrancar: function arranque(){
        console.log("el autor arranca");
    },
    //estado: {[nombre: "bateria", estado: "nuevo"],}
};


let ecommerce = [
    {nombre: "Samsung TV", precio: 6000, articulos: 10},
    {nombre: "DELL notebook", precio: 4000, articulos: 30},
    {nombre: "Auriculares Sony", precio: 1500, articulos: 15},
    {nombre: "Philips", precio: 12000, articulos: 20},
    {nombre: "Teclado logitech", precio: 3000, articulos: 5},
]

function elements(arreglo, propiedad){
    let nuevoArreglo = []
    for (let i=0; i<arreglo.length; i++){
        nuevoArreglo.push(arreglo[i][propiedad])
    }
    return nuevoArreglo
}
console.log(elements(ecommerce, 'precio'))