let prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade");

idade = parseInt(idade);

if (idade >= 18){
    console.log("Voce eh maior de idade")
} else {
    console.log("Voce eh menor de idade")
}
