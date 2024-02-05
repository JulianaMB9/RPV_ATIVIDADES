let prompt = require("prompt-sync")();

function calcularTaxaNatalidade(nascimentos, habitantes) {
    return (nascimentos * 1000) / habitantes;
}

function calcularTaxaMortalidade(obitos, habitantes) {
    return (obitos * 1000) / habitantes;
}

function calcularIndicadores(tipoIndicador, valor1, valor2) {
    switch (tipoIndicador) {
        case 'natalidade':
            return calcularTaxaNatalidade(valor1, valor2);
        case 'mortalidade':
            return calcularTaxaMortalidade(valor1, valor2);
        default:
            return 'Tipo de indicador inválido.';
    }
}

function exibirIndicadores() {
    let tipoIndicador = prompt("Digite o tipo de indicador (natalidade/mortalidade):");
    let valor1 = parseInt(prompt(`Digite o número de ${tipoIndicador === 'natalidade' ? 'crianças nascidas' : 'óbitos'}:`));
    let  valor2 = parseInt(prompt("Digite o número de habitantes:"));

    let resultado = calcularIndicadores(tipoIndicador, valor1, valor2);


    console.log(resultado);
}

exibirIndicadores();