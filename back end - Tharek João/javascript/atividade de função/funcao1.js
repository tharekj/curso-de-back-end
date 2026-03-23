//função1 - saudação simples
function saudacao(nome) {
    console.log("olá " + nome + "seja bem vindo ao javascript!");

}

//função2 - soma de dois numeros
function somar(a, b) {
    let resultado = a + b
    console.log("a soma é:" + resultado);
}

//fnção3 - verificar se um numero é impar ou par
function imparoupar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é um numero par");
    } else {
        console.log(numero + "é um numero impar");
    }
}

// chamando as funções
saudacao("tharek");
somar(2, 8);
imparoupar(0);