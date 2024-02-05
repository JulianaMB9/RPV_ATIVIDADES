
let prompt = require("prompt-sync")();
function calcularDesconto(valorCompra, codigoCliente) {
    let desconto;

    switch (codigoCliente) {
        case 1: // Cliente comum
            desconto = 0;
            break;
        case 2: // Funcionário
            desconto = 0.1;
            break;
        case 3: // Cliente VIP
            desconto = 0.05;
            break;
        default:
            return "Código de cliente inválido.";
    }

    const valorDesconto = valorCompra * desconto;
    const valorFinal = valorCompra - valorDesconto;

    return valorFinal;
}

function informarValorFinal() {
    const valorCompra = parseFloat(prompt("Digite o valor total da compra:"));
    const codigoCliente = parseInt(prompt("Digite o código do cliente (1 para comum, 2 para funcionário, 3 para VIP):"));

    const valorFinal = calcularDesconto(valorCompra, codigoCliente);

    console.log(valorFinal);

}

informarValorFinal();