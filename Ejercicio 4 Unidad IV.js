function calcularFacturaTelefonica() {
    // Solicitar datos al usuario
    const numeroTelefono = prompt("Ingrese el número de teléfono:");
    const totalLlamadas = parseInt(prompt("Ingrese el total de llamadas realizadas en el mes:"));
    const totalMinutos = parseInt(prompt("Ingrese el total de minutos consumidos:"));
    
    // Validar entradas
    if (isNaN(totalLlamadas) || isNaN(totalMinutos) || totalLlamadas < 0 || totalMinutos < 0) {
        alert("Por favor ingrese valores válidos (números positivos)");
        return;
    }
    
    // Calcular costo base según minutos
    let costoBase;
    if (totalMinutos <= 50) {
        costoBase = 100;
    } else if (totalMinutos <= 100) {
        costoBase = 120;
    } else if (totalMinutos <= 200) {
        costoBase = 150;
    } else if (totalMinutos <= 300) {
        costoBase = 200;
    } else {
        costoBase = 250;
    }
    
    // Calcular descuento según llamadas
    let porcentajeDescuento;
    if (totalLlamadas <= 20) {
        porcentajeDescuento = 5;
    } else if (totalLlamadas <= 100) {
        porcentajeDescuento = 7;
    } else if (totalLlamadas <= 200) {
        porcentajeDescuento = 9;
    } else {
        porcentajeDescuento = 10;
    }
    
    // Calcular monto final
    const descuento = costoBase * (porcentajeDescuento / 100);
    const montoFinal = costoBase - descuento;
    
    // Mostrar resultados
    console.log("\n=== FACTURA TELEFÓNICA ACME ===");
    console.log(`Número de teléfono: ${numeroTelefono}`);
    console.log(`Total de llamadas: ${totalLlamadas}`);
    console.log(`Total de minutos: ${totalMinutos}`);
    console.log(`\nCosto base (por minutos): ${costoBase} Bs`);
    console.log(`Descuento (${porcentajeDescuento}% por ${totalLlamadas} llamadas): ${descuento.toFixed(2)} Bs`);
    console.log(`\nMONTO TOTAL A PAGAR: ${montoFinal.toFixed(2)} Bs`);
    
    return {
        numeroTelefono: numeroTelefono,
        totalLlamadas: totalLlamadas,
        totalMinutos: totalMinutos,
        costoBase: costoBase,
        porcentajeDescuento: porcentajeDescuento,
        descuento: descuento,
        montoFinal: montoFinal
    };
}

// Ejecutar la función
calcularFacturaTelefonica();