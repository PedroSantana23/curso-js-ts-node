// String

const stringArray = ["D", "B", "F", "E", "C"];

console.log(stringArray.sort()); // Ordena os elementos do array
console.log(stringArray.reverse()); // Ordena de maneira reversa

// Number

/*
    sort((a,b) => a - b);
    -> Se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
    -> Se retornar 0, a ordenação de "a" e "b" não mudará.
    -> Se retornar um valor positivo, o valor em "b" será ordenado antes de "a".
*/

const numberArray = [1, -30, 100, 2, 13, 230];

console.log(numberArray.sort( (a,b) => a - b ));
console.log(numberArray.sort( (a,b) => b - a ));


// Object

const objArray = [
    { nome: "Pedro"},
    { nome: "Aurisan"},
    { nome: "Angélica"},
    { nome: "Isabella" },
];

console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)));
console.log(objArray.sort((a,b) => b.nome.localeCompare(a.nome)));
console.log(objArray.sort((a,b) => a.nome.localeCompare(b.nome)).reverse());

