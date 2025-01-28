/*
    Programa que mostre a tabuada de um número

    multiplicador x número = resultado
    multiplicador x 1 = resultado
    multiplicador x 2 = resultado
    multiplicador x 3 = resultado
    ...
    multiplicador x 10 = resultado
*/

let numero = 10;

// for (variável; condição; passos) { bloco de código a ser executado }
console.log(`==== Tabuada de ${numero}: ====`)
for (i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero*i}`)
};
console.log("===============================")