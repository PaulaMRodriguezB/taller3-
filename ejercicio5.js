let Emilia = [500000, 500000, 3000000, 200000]
let Lola = [60000, 50000, 400000, 200000]
let Paula = [ 1000000, 500000,700000, 800000]
let usuarios = [
    { nombre: "Emilia", movimientos: Emilia },
    { nombre: "Lola", movimientos: Lola },
    { nombre: "Paula", movimientos: Paula }
    ]
    for (let i = 0; i < usuarios.length; i++) {
    
        let usuarioActual = usuarios[i];
    
        let totalUsuario = 0;
for (let j = 0; j < usuarioActual.movimientos.length; j++) {
        totalUsuario = totalUsuario + usuarioActual.movimientos[j];
    }
    console.log("Usuario: " + usuarioActual.nombre + " Total: " + totalUsuario);
}

  

    
