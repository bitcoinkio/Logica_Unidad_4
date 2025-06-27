pi// Solicitar datos al empleado
let nombreEmpleado = prompt("Ingrese el nombre del empleado:");
let salarioPorHora = parseFloat(prompt("Ingrese el salario básico por hora:"));
let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas esta semana:"));

// Constantes
let horasNormales = 48;
let porcentajeRecargo = 0.35; // 35%
let salarioNeto;

// Calcular salario
if (horasTrabajadas > horasNormales) {
    let horasExtras = horasTrabajadas - horasNormales;
    salarioNeto = (horasNormales * salarioPorHora) + (horasExtras * salarioPorHora * (1 + porcentajeRecargo));
} else {
    salarioNeto = horasTrabajadas * salarioPorHora;
}

// Mostrar resultados
console.log("Nombre del empleado: " + nombreEmpleado);
console.log("Salario neto: $" + salarioNeto);p install openpyxl pandas
