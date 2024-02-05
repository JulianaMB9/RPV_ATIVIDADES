let prompt = require("prompt-sync")();

function Tabuada(numero) {


    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(resultado);
    }

   
}


let numeroDaTabuada = parseInt(prompt("Digite um número para gerar a tabuada:"));
Tabuada(numeroDaTabuada);

