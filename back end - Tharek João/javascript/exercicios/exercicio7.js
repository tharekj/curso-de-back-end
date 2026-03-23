numeros = 40
let soma = 0;

for (let i = 1; i <= numeros; i++) {
        if (i % 2 === 0) {
    soma = soma + i;
}}

console.log("A soma de todos os numeros pares é:", soma);
