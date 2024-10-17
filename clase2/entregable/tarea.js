
const calificacion = 65;
let nota = null;

if(calificacion >= 90) {
    nota = "excelente"
} else if (calificacion >= 75) { 
    nota = "bien"
} else if (calificacion >= 60) { 
    nota = "suficiente"
} else { 
    nota = "no aprobatorio" }

console.log(`El desempeño del estudiante fue ${nota}`);