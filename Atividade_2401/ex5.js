let prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome:");
let salario = prompt("Digite seu salário:");

salario = parseFloat(salario);

salario = salario* 1.1 ;

console.log(nome, "seu Novo salário eh: ", salario);
