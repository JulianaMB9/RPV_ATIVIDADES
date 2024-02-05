let prompt = require("prompt-sync")();


let primeiro_numero = prompt("Digite o primeiro numero:");
let segundo_numero = prompt("Digite o segundo numero::");
let terceiro_numero = prompt("Digite o terceiro numero:");

primeiro_numero = parseInt(primeiro_numero);
segundo_numero = parseInt(segundo_numero);
terceiro_numero = parseInt(terceiro_numero);

let media = (primeiro_numero + segundo_numero + terceiro_numero) /3;

console.log("Média Aritimética: ", media)