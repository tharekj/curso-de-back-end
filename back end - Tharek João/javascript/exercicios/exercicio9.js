// importando biblioteca para entrada de dados
const prompt = require("prompt-sync")();

// função saudação
function saudacao() {
    let nome = prompt("Digite seu nome: ");
    console.log("Olá " + nome + ", seja bem vindo ao JavaScript!");
}

// função soma
function soma() {
    let num1 = Number(prompt("Digite o primeiro número: "));
    let num2 = Number(prompt("Digite o segundo número: "));

    let resultado = num1 + num2;

    console.log("Resultado da soma: " + resultado);
}

// função par ou ímpar
function imparOuPar() {
    let numero = Number(prompt("Digite um número: "));

    if (numero % 2 === 0) {
        console.log("O número " + numero + " é PAR");
    } else {
        console.log("O número " + numero + " é ÍMPAR");
    }
}

// NOVA CONDICIONAL – verificar temperatura
function verificarTemperatura() {
    let temperatura = Number(prompt("Digite a temperatura: "));

    if (temperatura < 10) {
        console.log("Está muito frio");
    } else if (temperatura >= 10 && temperatura <= 20) {
        console.log("Está frio");
    } else if (temperatura > 20 && temperatura <= 30) {
        console.log("Temperatura agradável");
    } else {
        console.log("Está muito quente");
    }
}

// NOVO LOOP – contagem
function contagem() {
    let numero = Number(prompt("Digite um número para contagem: "));

    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

// chamando funções
saudacao();
soma();
imparOuPar();
verificarTemperatura();
contagem();