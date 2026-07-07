let movimientos = [20000, 0, -15000, 0, -3200, 50000, -8500];

for (let i = 0; i < movimientos.length; i++) {
    let movimientoActual = movimientos[i];

   
    if (movimientoActual === 0) {
        console.log("Posición " + i + ": Movimiento vacío . ");
        continue; 
    }

   
    if (movimientoActual < 0) {
        console.log(" Primer pago encontrado!");
        console.log("Monto: " + movimientoActual + "  Movimiento encontrado # " + i);
        
        
        break; 
    }

    
    console.log("Posición " + i + ": total de ingreso" + movimientoActual);
}