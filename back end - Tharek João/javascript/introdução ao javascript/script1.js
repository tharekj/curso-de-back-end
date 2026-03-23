// numeros inteiros
    let numero1 = 10;
    let numero2 = 5;
    let numero3 = 8 + 1;

    let somainteiros = numero1 / numero2 + numero3;

    console.log("soma de numeros inteiros:", somainteiros);

    // números decimais
    let decimal1 = 3.5;
    let decimal2 = 2.2;
    let decimal3 = 2 + 0.11111;
    
    let somadecimais = decimal1 + decimal2 * decimal3;

    console.log("soma de numeros decimais:", somadecimais);

    // numero com texto (string)
    let textonumero1 = "8";
    let textonumero2 = "4";
    let textonumero3 = "3";

    let somatexto = Number(textonumero1) + Number(textonumero2) + Number(textonumero3);

    console.log("a soma de numeros que estavam em texto:", somatexto);

    //exemplo misto
    let inteiro = 7;
    let decimal = 2.5;
    let textonumero = "3";
    let numero = 5;

    let somatotal = inteiro / decimal * Number(textonumero) ** numero;

    console.log("soma total:", somatotal);
    