
let prompt = require("prompt-sync")();

function calcularPesoIdeal(sexo, peso) {
    if (sexo === "M") {
        return (100 - peso) * 0.9;
    } else if (sexo === "F") {
        return (100 - peso) * 0.85;
    } else {
        return "Sexo inválido.";
    }
}

function informarPesoIdeal() {
    const sexo = prompt("Digite o sexo (M/F):");
    const peso = parseFloat(prompt("Digite o peso do usuário:"));

    const pesoIdeal = calcularPesoIdeal(sexo, peso);

    console.log(pesoIdeal);

}

informarPesoIdeal();