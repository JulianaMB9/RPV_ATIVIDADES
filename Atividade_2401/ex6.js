let prompt = require("prompt-sync")();

let a = prompt("Digite o primeiro numero:");
let b = prompt("Digite o segundo numero::");

a = parseInt(a);
b = parseInt(b);

let c;

if (a == b){
    c = a + b ;
    console.log("soma:" , c)
    
} else {
    c = a*b;
    console.log("multiplicação:" , c)
}