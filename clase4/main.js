
//let numeros = []; //arreglos vacios
/*desde la declaración se pueden insertar datos, 
entre cada elemento, debe de ir una , (coma) */

const numeros = [1,2,3,4,5,6,7]

const frutas = [
    "manzana",
    "pera",
    "uva",
    "platano",
    "mango",
    "fresa",

]

console.log(numeros);

console.log(numeros [4] ); /*para identificar un valor, 
se empieza a contar considerando como primera posicion el 0, en este ejemplo,
en la posicion 4, se encuentra el numero 5 */

console.log(numeros [4] + numeros [3]); /* realiza la suma de los elementos
 que se encuentran en la posicion 4 y 5 */

numeros [4] = 10; 

console.log (numeros)

console.log (numeros.length) //cantidad de elementos que hay 

for (let i= 0; i < numeros.length; i++){
    //console.log(i)
    console.log(numeros [i])
}

console.log (frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i].toUpperCase())
}

let miFrutaFavorita = frutas.indexOf("mango") /*muestra la posicion del elemento buscado, si no existe, arroja un -1, 
.toLowerCase convierte una cadena en minusculas .toUpperCase, convierte todas a mayusculas aun que se encuentren guardadas en minusculas */

console.log(miFrutaFavorita)