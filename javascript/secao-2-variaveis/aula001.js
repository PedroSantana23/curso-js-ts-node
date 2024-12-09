/*
    var é utilizado globalmente
    let é gerado dentro de um escopo
    const é gerado dentro de um escopo porém podemos armazenar dados apenas uma vez
*/


// VAR
var cachorro = "Bolota";
console.log(cachorro);

cachorro = "Rex";
console.log(cachorro);


// LET
let lanche = "Hamburguer";
console.log(lanche);

lanche = "Pizza";
console.log(lanche);


// CONST
const nome = "Pedro";
console.log(nome);

nome = "João"; // Erro
console.log(nome);