const prompt = require('prompt-sync')();
let opcion;
do {
    console.log(" MENÚ DE NEQUI ");
    console.log(" 1 = Ver saldo");
    console.log(" 2 = Enviar dinero");
    console.log(" 3 = Recargar");
    console.log(" 4 = Salir");
    
    opcion = prompt("Elije una opción: ");

    if (opcion === "1") {
        console.log(" ver saldo");
    }
    else if (opcion === "2") 
        {
        console.log(" Enviar dinero ");
        }
        else if (opcion === "3") {
        console.log(" Recargar");
    }
else if (opcion === "4") {
        console.log(" Salir, vuelve pronto");
}
else {
console.log ("opcion invalida, ingrese una opcion diferente")    
}
}
 while (opcion === "4");