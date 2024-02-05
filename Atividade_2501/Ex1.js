

let prompt = require("prompt-sync")();


let continuar = true;
let opcao;

function hotel(opcao) {
    console.clear();

    switch (opcao) {
        case 1:
            return "Bem-vindo,' + nome + '! Check-in concluído.";
            break;
        case 2:
            return "Chamando serviço de quarto";
            break;
        case 3:
            return "Registrando pedido";
            break;
        case 4:
            return "Obrigado por escolher nosso hotel! Check-out concluído."
            break;
        case 0:
            continuar = false;
            break;
        default:
            return "Opção Inválida!";
            break;
    }
}


while (continuar) {
    let nome = prompt("Por favor, insira seu nome:");
    console.log('Bem-vindo,' + nome);


    opcao = parseInt(prompt("Opções disponíveis:\n" +
        "1. Fazer Check-in\n" +
        "2. Chamar serviço de quarto\n" +
        "3. Fazer pedido\n" +
        "4. Fazer Check-out\n" +
        "0. Sair"));

    hotel(opcao);

}