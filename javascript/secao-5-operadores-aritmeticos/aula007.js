/*
    && ( E ) -> Adição - OBS: Só é verdadeiro se as duas condições forem verdadeiras
    ! ( NOT ) -> Negação - OBS: É verdadeiro se for o oposto
    || ( OR ) -> Ou - OBS: Só é verdadeiro se uma das condições forem verdadeiras
*/

// "&&""
console.log(1 == 1 && 1 === "1"); // false
console.log(1 == 1 && 1 === 1); // true

// "!""
console.log(1 != 1); // false
console.log(1 != 2); // true

// "||""
console.log(1 === 1 || 2 != 2); // true (A primeira condição foi verdadeira, então retorna true)
console.log("1" === 1 || 2 === 2); // true (A segunda condição foi verdadeira, então retorna true)
console.log("1" === 1 || 2 != 2); // false (As duas condições foram false, então retorna false)