/*
    Argumentos / Parâmetros
*/

function somar(a, b) { // Parâmetros "a" e "b"
    const soma = a + b
    return soma;
};

console.log(somar(10, 20));  // Ao chamar a função você precisar passar os parâmetros

const subtracao = (num1 = 0, num2 = 0) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    }

    return "Você passou dados diferentes!";
};

console.log(subtracao(1, 2));