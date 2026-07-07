let movimientos = [350000, -50000, -40000,-70000,300000, 250000];
let cantidadDeRetiros = 0;
let total = 0; 
for (let i = 0; i < movimientos.length; i++ )
{ let movimientoAc = movimientos[i]; 
    total = total + movimientoAc; 

    if (movimientoAc < 0) {
        cantidadDeRetiros = cantidadDeRetiros + 1; 

    }

}
console.log("Balance Total: $" + total + " Cantidad de Retiros: " + cantidadDeRetiros);

