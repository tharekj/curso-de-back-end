// Importa o módulo readline
const readline = require("readline");

// Cria interface para leitura no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o primeiro número
rl.question("Digite o primeiro número: ", function (N) {


    let fatorial = 1;

    // calcular fatorial
    for (let i = 1; i <= N; i++) {
        fatorial = fatorial * i;
    }

    // mostrar resultado
    console.log("O fatorial de", N, "é:", fatorial);
});