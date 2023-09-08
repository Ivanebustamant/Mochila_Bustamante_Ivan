const prompt = require("prompt-sync")({ sigint: true });

//BUCLES Y REPETICIONES

//1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

function valor (parametro){
    for ( let i = 1; i <= 10 ; i++) {
        parametro++;
        console.log(parametro);
    } 
}

valor(4)

//2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function saltoTresTres(inicio){
    for (let i = 5; i <= 20; i+= 3){
        console.log(i);
    }
}
saltoTresTres()


//3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

function sumatoria(){
    let suma = 0;
    for (let i = 0 ; i <= 100; i++){
        suma += i;
    }
    console.log(suma);
}
sumatoria()

//4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

function factorial(parametroFactorial) {
    let facto = 1;
    for (let i = 2; i <= parametroFactorial; i++) {
        facto *= i;
    }
    console.log(facto);
}
factorial(6)


//5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.


function fibonacciHasta(valorLimite) {
    let fib1 = 0;
    let fib2 = 1;
    console.log(fib1);
    while (fib2 <= valorLimite) {
        console.log(fib2);
        const temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp;
    }
}
fibonacciHasta(70)