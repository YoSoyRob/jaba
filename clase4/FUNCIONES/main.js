console.table ([
    "manzana",
    "pera",
    "uva",
    "platano",
    "mango",
    "fresa",
])

//una sola comilla alt + 39 -> ''
//comilla inclinada alt + 96 -> ``

function sumaDosNumeros (numero1, numero2) { /*numero1 y numero2, se pueden nombrar como sea, 
    son variables de manera local, si aparece "void" no muestra nada, 
    por lo que es necesario agregar el "return"*/
    return numero1 + numero2
}

//otra forma de mostrar
sumaDosNumeros(5,3)
let resultado = sumaDosNumeros(5,3)
console.log(resultado)

console.log (sumaDosNumeros (5,3))

function saludosPersonalizado(nombre) {
    return `Holaaa, ${nombre}`
}

saludosPersonalizado("Rob")

let saludoParaRob = saludosPersonalizado("Roob")

console.log(saludoParaRob)

let saludosPersonalizados = []

saludosPersonalizados.push(saludosPersonalizado("Rob"))
saludosPersonalizados.push(saludosPersonalizado("Ale"))
saludosPersonalizados.push(saludosPersonalizado("Tom"))
saludosPersonalizados.push(saludosPersonalizado("Lila"))

console.log(saludosPersonalizados) //esto se logra ya que se inserto el "return"

const square = function (number) {
    return number + number
}