//Clase Math

let matriz = [];
let contador = 1;

for (let i = 0; i < 10; i++) {
  let fila = [];
  for (let j = 0; j < 10; j++) {
    fila.push(contador);
    contador++;
  }
  matriz.push(fila);
}
console.table(matriz);



function sumas(matriz) {
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
      sumatoria += matriz[i][0];
      sumatoria += matriz[i][matriz[0].length - 1];
    }
    return sumatoria;
  }
  let resultado = sumas(matriz);
  console.log(resultado);

  ///----



function sumaCuayCinc(matriz) {
    let sumatoria2 = 0;
    for (let j = 0; j < matriz[5].length; j++) {
      sumatoria2 += matriz[4][j];
      sumatoria2 += matriz[5][j];
    }
    return sumatoria2;
  }
  
  
  let resultado2 = sumaCuayCinc(matriz);
  console.log(resultado2);