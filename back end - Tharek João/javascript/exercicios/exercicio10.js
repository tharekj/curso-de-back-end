const prompt = require("prompt-sync")();

// função para verificar maior número
function maiorNumero() {
    let n1 = Number(prompt("Digite o primeiro número: "));
    let n2 = Number(prompt("Digite o segundo número: "));

    if (n1 > n2) {
        console.log("O maior número é: " + n1);
    } else if (n2 > n1) {
        console.log("O maior número é: " + n2);
    } else {
        console.log("Os números são iguais");
    }
}

// função tabuada
function tabuada() {
    let numero = Number(prompt("Digite um número para ver a tabuada: "));

    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// função contagem regressiva
function contagemRegressiva() {
    let numero = Number(prompt("Digite um número: "));

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}

// função verificar idade
function verificarIdade() {
    let idade = Number(prompt("Digite sua idade: "));

    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
}

// chamando funções
maiorNumero();
tabuada();
contagemRegressiva();
verificarIdade();