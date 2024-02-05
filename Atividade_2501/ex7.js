let prompt = require("prompt-sync")();

function calcularValorFinal(valorProduto, formaPagamento) {
    switch (formaPagamento) {
        case 1: 
            return valorProduto * 0.9; 
        case 2: 
            return valorProduto;
        default:
            return "Forma de pagamento inválida.";
    }
}

function exibirValorFinal() {
    const valorProduto = parseFloat(prompt("Digite o valor do produto:"));
    const formaPagamento = parseInt(prompt("Digite a forma de pagamento (1 para à vista, 2 para à prazo):"));

    const valorFinal = calcularValorFinal(valorProduto, formaPagamento);


    console.log(valorFinal);

}

exibirValorFinal();