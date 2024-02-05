let prompt = require('prompt-sync')();

let valor = 0;
let continuar = true;

while (continuar ) {
    // Menu de operações
    let operacao = prompt("Escolha uma operação:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");

    switch (operacao) {
        case "1":
            // Adição

            let num1 = parseFloat(prompt("Digite um número:"));
            let num2 = parseFloat(prompt("Digite um número:"));
            console.log(`Resultado: ${num1 + num2}`);
            break;

        case "2":
            // Subtração
            let num3 = parseFloat(prompt("Digite um número:"));
            let num4 = parseFloat(prompt("Digite um número:"));
            console.log(`Resultado: ${num3 - num4}`);
            break;

        case "3":
            let num5 = parseFloat(prompt("Digite um número:"));
            let num6 = parseFloat(prompt("Digite um número:"));
            console.log(`Resultado: ${num5 * num6}`);
            break;

        case "4":
            let num7 = parseFloat(prompt("Digite um número:"));
            let num8 = parseFloat(prompt("Digite um número:"));

            if (num8 !== 0) {
                console.log(`Resultado: ${num7 / num8}`);
            } else {
                console.log("Erro: Divisão por zero!");
            }
            break;

        case "5":
            // Sair do programa
            continuar = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}

