const myArray = [1, 2, 3, 4, 5];

const myArrayobj = [
    { nome: "Pedro", idade: 21 },
    { nome: "Lucas", idade: 20 },
    { nome: "Matheus", idade: 22 },
];

// for ("inicialização"; "condição"; "expressão final")

// Number
console.log("Números:")
for (let i = myArray[0]; i < myArray.length; i++) {
    console.log(myArray[i])
}


// Object
console.log("Objetos:")
for (let i = 0; i < myArrayobj.length; i++) {
    console.table(myArrayobj[i]);
};

// for of 
for (let item of myArray) {
    console.log(item);
}


// for in
const obj = { nome: "Pedro", idade: 21 };

for (let item in obj) {
    console.log(item);
    console.log(obj[item]);
}