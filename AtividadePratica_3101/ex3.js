let prompt = require("prompt-sync")();

function calcularQuadrado(numero) {
    return numero * numero;
}

let numeroDigitado = parseFloat(prompt("Digite um número:"));
let quadrado = calcularQuadrado(numeroDigitado);
console.log(`O quadrado de ${numeroDigitado} é ${quadrado}`);