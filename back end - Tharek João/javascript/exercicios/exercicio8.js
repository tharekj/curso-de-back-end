// Importa o módulo readline
const readline = require("readline");

// Cria interface para leitura no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o número ao usuário
rl.question("Digite um numero: ", function (n) {

    let numero = parseInt(n);

    // estrutura de repetição
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }

    // encerra o programa
    rl.close();
});