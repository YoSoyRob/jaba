/* TAREA
1. Crear un programa donde el usuario pida un numero mediante un prompt de estrellas (asteriscos) y que nos lo muestre en consola.

usuario = 5;

******

usuario 10;

**********

2. Crear un programa donde el usuario pida un numero mediante un prompt filas y dependiendo del número de fila, nos muestra el número de estrellas (asteriscos) y que nos lo muestre en consola.

usuario = 5;

*
**
***
****
*****

usuario = 3;

*
**
***

*/

let numero = prompt("introduce un numero de estrellas que quieres ver del 0 al 10");
numero = parseInt(numero);

if (numero >= 0 && numero <= 10) {
  let estrellas = "*".repeat(numero);
  console.log(estrellas);
} else {
  console.log("Ahhh no seas asi, que sea del 0 al 10");
}


let filas = prompt("Ahora del 0 al 10, pon cuantas filas quieres ver");
filas = 
filas
parseInt(filas);

if (filas >= 0 && filas <= 10) {
for (let i = 1; i <= filas; i++) {
    let estrellas1 = "*".repeat(i);
console.log(estrellas1);
  }
} else {
console.log("Ahhh no seas asi, que sea del 0 al 10");
}
