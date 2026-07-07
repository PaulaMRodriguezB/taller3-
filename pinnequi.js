const prompt = require('prompt-sync')();
let pinCorrecto = 2032
let intento = prompt (" Introducir pin : ");


while (intento === pinCorrecto) {
    console.log(" PIN incorrecto.");
    intento = prompt("Inténtalo de nuevo: ");

}
console.log("PIN correcto, BIENVENIDO.");
