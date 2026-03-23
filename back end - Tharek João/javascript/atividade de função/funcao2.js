// importando bliblioteca para entrada de dados
const prompt = require("prompt-sync")();

//função 1 - saudação
function saudacao() {
    let nome = prompt("digite o seu nome:");
    console.log("olá " + nome + "! bem vindo ao javascript");
}

//funcao 2 - soma de dois numeros
function soma() {
    let num1 = Number(prompt("digite o primeiro numero: "));
    let num2 = Number(prompt("digite o segundo numero: "));

    let resultado = num1 + num2

    console.log("resultado da soma: " + resultado)
}

//funcao 3 - verificar impar ou par
function imparoupar() {
    let numero = Number(prompt("digite um numero: "))

    if (numero % 2 === 0)
        console.log("o numero " + numero + " é par")
    else {
        console.log ("o numero " + numero + " é impar")
    }   
}

//chamando as funcoes
saudacao();
soma();
imparoupar();