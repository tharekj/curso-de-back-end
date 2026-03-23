// Importa o módulo readline
const readline = require("readline");

// Cria interface para leitura no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== CALCULADORA SIMPLES ===");

// Pergunta o primeiro número
rl.question("Digite o primeiro número: ", function(numero1){

    // Pergunta o segundo número
    rl.question("Digite o segundo número: ", function(numero2){

        // Converte texto para número
        numero1 = Number(numero1);
        numero2 = Number(numero2);

        let soma = numero1 + numero2;
        let subtracao = numero1 - numero2;
        let multiplicacao = numero1 * numero2;
        let divisao = numero1 / numero2;

        console.log("\n=== RESULTADOS ===");
        console.log("Soma:", soma);
        console.log("Subtração:", subtracao);
        console.log("Multiplicação:", multiplicacao);
        console.log("Divisão:", divisao);

        rl.close();
    });

});