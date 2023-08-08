const prompt = require("prompt-sync")({ sigint: true });

function pulgadasACm(pulgadas){
    return pulgadas * 2.54;
}
console.log("la conversion de pulgadas a CM es: " + pulgadasACm(5) + "cm");

function url(string){
    return "http://www." + string + ".com";
}
url("pepito");

function admiracion(frase){
    return frase + "!!!";
}
admiracion("programando xidori");

function edadPerro(edadHumano){
    return edadHumano * 7;
}
edadPerro(27);

//let edadPerro = edadHumano => edadHumano * 7;
//edadPerro(28)

function valorHora(sueldo){
    return sueldo / 40;
}
valorHora(15800);


function imc(peso, altura){
    return peso / (altura * altura);
}
imc(75, 1.73)

//let imc = (peso, altura) => peso / (altura * altura);
//imc (75, 1.73);

function mayus(string){
    return string.toUpperCase()
}
mayus("hola como estan?");



function tipoDeDato(dato){
    return typeof dato
}

tipoDeDato(false);
tipoDeDato(27);
tipoDeDato("Nancy");


function circulo(radio){
    return Math.PI*Math.pow(radio,2);
}
circulo(5);

