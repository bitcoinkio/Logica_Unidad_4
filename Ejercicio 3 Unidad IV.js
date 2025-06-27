// Cálculo de compra con impuesto - JavaScript

// Función principal
function calcularTotalCompra() {
    // Constantes
    const IMPUESTO = 0.145; // 14.5%
    const LIMITE_SIN_IMPUESTO = 50000;
    
    // Variables
    let totalSinImpuesto = 0;
    const articulos = [];
    
    // Solicitar datos de 3 artículos
    for (let i = 1; i <= 3; i++) {
        // Solicitar datos (usando prompt del navegador)
        const nombre = prompt(`Ingrese el nombre del artículo ${i}:`);
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombre}:`));
        const precio = parseFloat(prompt(`Ingrese el precio unitario de ${nombre} (Bs):`));
        
        // Validación de entradas
        if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0) {
            alert("Error: Cantidad y precio deben ser números positivos");
            i--; // Repetir la iteración
            continue;
        }
        
        // Cálculos
        const subtotal = cantidad * precio;
        totalSinImpuesto += subtotal;
        
        // Almacenar artículo
        articulos.push({
            nombre: nombre,
            cantidad: cantidad,
            precio: precio,
            subtotal: subtotal
        });
    }
    
    // Calcular impuesto si aplica
    let impuesto = 0;
    if (totalSinImpuesto > LIMITE_SIN_IMPUESTO) {
        impuesto = totalSinImpuesto * IMPUESTO;
    }
    
    const totalConImpuesto = totalSinImpuesto + impuesto;
    
    // Mostrar resultados en consola
    mostrarResultados(articulos, totalSinImpuesto, impuesto, totalConImpuesto);
    
    return {
        articulos: articulos,
        subtotal: totalSinImpuesto,
        impuesto: impuesto,
        total: totalConImpuesto
    };
}

// Función para mostrar resultados
function mostrarResultados(articulos, subtotal, impuesto, total) {
    console.log("\n=== DETALLE DE COMPRA ===");
    articulos.forEach(articulo => {
        console.log(`${articulo.nombre}: ${articulo.cantidad} x ${articulo.precio.toFixed(2)} Bs = ${articulo.subtotal.toFixed(2)} Bs`);
    });
    
    console.log("\n=== RESUMEN DE PAGO ===");
    console.log(`Subtotal: ${subtotal.toFixed(2)} Bs`);
    console.log(impuesto > 0 
        ? `Impuesto (14.5%): ${impuesto.toFixed(2)} Bs` 
        : "Impuesto: No aplica (compra ≤ 50,000 Bs)");
    console.log(`TOTAL A PAGAR: ${total.toFixed(2)} Bs`);
}

// Ejecutar la función (solo en navegador)
// calcularTotalCompra();