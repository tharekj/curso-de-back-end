// Importa o módulo readline
const readline = require("readline");

// Cria interface para leitura no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o primeiro número
rl.question("Digite o primeiro número: ", function(N){

let soma = 0;

// loop de 1 até N
for (let i = 1; i <= N; i++) {
    soma = soma + i;
}

// mostrar resultado
console.log("A soma dos numeros de 1 ate", N, "é:", soma);
});
