/*
    slice = pega os dados dentro de um range sem quebrar o Array
    splice = remove os dados do Array dentro de um range
*/

let arr = [
    { nome: "Pedro", tel: "(00) 00000 - 0000" },
    { nome: "Pai", tel: "(11) 11111 - 1111 " },
    { nome: "Mãe", tel: "(22) 22222 - 2222 " },
];

console.table(arr);

arr.splice(0, 1);

const newArray = arr.slice(0, 1);
console.log(newArray);

console.table(arr);
