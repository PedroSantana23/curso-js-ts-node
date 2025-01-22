/*
    1. ==
    2. ===
    3. !=
    4. !==
    5. >
    6. <
    7. >=
    8. <=
*/

// "=="
console.log(1 == 1); // true
console.log("1" == 1); // true

// "==="
console.log("1" === 1); // false (Verifica se é do mesmo tipo mesmo sendo o valor igual)
console.log(1 === 1); // true

// "!="
console.log(1 != 2); // true
console.log(1 != 1); // false

// "!=="
console.log(1 !== 1); // false
console.log(1 !== "1"); // true

// ">" "<"
console.log(1 > 2); // false
console.log(1 > 1); // false
console.log(2 > 1); // true

console.log(1 < 2); // true
console.log(1 < 1); // false
console.log(2 < 1); // false

// ">=" "<="
console.log(1 >= 1); //true
console.log(2 >= 1); // true
console.log(1 >= 2); // false

console.log(1 <= 2); // false
console.log(1 <= 1); // false
console.log(2 <= 1); // false