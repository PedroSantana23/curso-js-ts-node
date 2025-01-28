/*
    Programa que mostra quantas letras repetidas aparecem em uma palavra
    Ex: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1 }
*/

const palavra = "Abacate".toLowerCase().replaceAll(" ", "");
let letras = {};

for (i = 0; i < palavra.length; i++) {
    if (letras[palavra[i]]) {
        letras[palavra[i]]++;
    } else {
        letras[palavra[i]] = 1;
    }
}

console.log(letras);
