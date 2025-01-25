/*
    IMC é a sigla para ìndice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde
    para calcular o peso ideal de cada pessoa.
    
    IMC = peso(em kg) / (altura(em metros)**2)

    Menor que 17       -> Muito abaixo do peso
    Entre 17 e 18,49   -> Abaixo do peso
    Entre 18,5 e 24,99 -> Peso normal
    Entre 25 e 29,99   -> Acima do peso
    Entre 30 e 34,99   -> Obesidade I
    Entre 35 e 39,99   -> Obesidade II
*/

let peso = 90;
let altura = 1.79;

imc = peso / (altura**2)

// Com if e else
if (imc < 17) {
    console.log(`Muito abaixo do peso. IMC = ${imc}.`);
} else if (imc >= 17 && imc <= 18.49) {
    console.log(`Abaixo do peso. IMC = ${imc}.`);
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log(`Peso Normal. IMC = ${imc}.`);
} else if (imc >= 25 && imc <= 29.99) {
    console.log(`Acima do peso. IMC = ${imc}.`);
} else if (imc >= 30 && imc <= 34.99) {
    console.log(`Obesidade I. IMC = ${imc}.`);
} else {
    console.log(`Obesidade II. IMC = ${imc}.`);
};

// Com switch case
switch (true) {
    case imc < 17:
        console.log(`Muito abaixo do peso. IMC = ${imc}.`);
        break;

    case imc >= 17 && imc <= 18.49:
        console.log(`Abaixo do peso. IMC = ${imc}.`);
        break;

    case imc >= 18.5 && imc <= 24.99:
        console.log(`Peso normal. IMC = ${imc}.`);
        break;

    case imc >= 25 && imc <= 29.99:
        console.log(`Acima do peso. IMC = ${imc}.`);
        break;

    case imc >= 30 && imc <= 34.99:
        console.log(`Obesidade I. IMC = ${imc}.`);
        break;

    case imc >= 35 && imc <= 39.99:
        console.log(`Obesidade II. IMC = ${imc}.`);
        break;
};


