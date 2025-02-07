const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
];

console.table(arr);
console.log(arr[0]);        // Mostra o elemento de índice 0 no array que é um outro array
console.log(arr[1][2]);    // mostra o elemento de índice 1 dentro do array que tem o índice 0 dentro do outro array 
console.log(arr[3][1][1])
