const libros = [
    {
        titulo: "La Teoría del Todo ",
        autor: "Stephen Hawking ",
        anio: "2007",
        estado: true,
        describirLibro: "Con su habitual tono didáctico y en un lenguaje accesible a todos los públicos, el gran físico británico Stephen Hawking explica la historia del universo, desde las primeras conjeturas de los griegos y de la época medieval hasta las más complejas teorías de hoy."
    },
    {
        titulo: "Punto y línea sobre el plano",
        autor: "Vasili Kandinsky",
        anio: "1927",
        estado: false,
        describirLibro: "Según Kankinsky, una línea es la traza que deja un punto al moverse, por lo tanto, su existencia siempre está vinculada al punto."
    },
    {
        titulo: "El Enigma de Balenciaga",
        autor: "María Fernández Miranda",
        anio: "2023",
        estado: true,
        describirLibro: "Cristóbal Balenciaga no se dejaba ver en sus desfiles ni salía jamás a saludar tras finalizarlos. Si hacemos caso a la leyenda, el diseñador vasco seguía con detalle los pases a través de un discreto agujero practicado en las cortinas de terciopelo que decoraban su maison."
    }
]

for (let i = 0; i < libros.length; i++) { 
    console.log(`El libro de: ${libros[i].autor} se llama "${libros[i].titulo}"`);
}

for(let i = 0; i < libros.length; i++) {
    console.log(`Una referencia general del libro "${libros[i].titulo}" es ${libros[i].describirLibro}`)
}

for(let i = 0; i < libros.length; i++) {
    if (libros.estado === true) {
        console.log(`El libro "${libros[i].titulo}" esta disponible para su consulta`);
    } else {
        console.log (`El libro "${libros[i].titulo}" no esta disponible para su consulta`);
    }
}

//no estoy logrando que en la parte del estado, muestre que esta o no disponible, en ambos casos arroja que no esta disponible
