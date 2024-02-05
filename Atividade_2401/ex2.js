let prompt = require("prompt-sync")();

let primeiro_numero = prompt("Digite o primeiro numero:");
let segundo_numero = prompt("Digite o segundo numero::");

primeiro_numero = parseInt(primeiro_numero);
segundo_numero = parseInt(segundo_numero);


let soma = primeiro_numero + segundo_numero;
let sub = primeiro_numero - segundo_numero;
let mult = primeiro_numero * segundo_numero;
let div = primeiro_numero / segundo_numero;

console.log("O resultado da soma  eh", soma);
console.log("O resultado da subtração  eh", sub);
console.log("O resultado da multiplicação  eh", mult);
console.log("O resultado da divisão  eh", div);