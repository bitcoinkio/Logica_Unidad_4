// Función principal para calcular el promedio
function calcularPromedio() {
    // Array para almacenar las notas
    let notas = [];
    let sumaNotas = 0;
    let materiasAprobadas = 0;
    const CANTIDAD_MATERIAS = 6;
    const NOTA_MINIMA_APROBATORIA = 10; // 10 puntos para aprobar
    
    // Solicitar las 6 notas al usuario
    for (let i = 1; i <= CANTIDAD_MATERIAS; i++) {
        let notaValida = false;
        let nota;
        
        // Validar cada nota
        while (!notaValida) {
            nota = parseFloat(prompt(`Ingrese la nota de la materia ${i} (0-20 puntos):`));
            
            if (isNaN(nota)) {
                alert("Por favor ingrese un número válido");
            } else if (nota < 0 || nota > 20) {
                alert("La nota debe estar entre 0 y 20 puntos");
            } else {
                notaValida = true;
            }
        }
        
        // Almacenar la nota
        notas.push(nota);
        sumaNotas += nota;
        
        // Contar materias aprobadas
        if (nota >= NOTA_MINIMA_APROBATORIA) {
            materiasAprobadas++;
        }
    }
    
    // Calcular resultados
    const promedio = sumaNotas / CANTIDAD_MATERIAS;
    const materiasReprobadas = CANTIDAD_MATERIAS - materiasAprobadas;
    
    // Mostrar resultados
    console.log("=== RESULTADOS ===");
    console.log("Notas ingresadas: " + notas.join(", "));
    console.log("Promedio general: " + promedio.toFixed(2));
    console.log("Materias aprobadas (≥10): " + materiasAprobadas);
    console.log("Materias reprobadas (<10): " + materiasReprobadas);
    
    // Devolver resultados como objeto (opcional)
    return {
        notas: notas,
        promedio: promedio,
        aprobadas: materiasAprobadas,
        reprobadas: materiasReprobadas
    };
}

// Ejecutar la función
calcularPromedio();