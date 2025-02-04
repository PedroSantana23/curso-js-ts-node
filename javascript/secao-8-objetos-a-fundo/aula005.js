const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a", b: { c: "C" } },
};

// hasOwnProperty --- propertyName in Tenis

console.log(Tenis.hasOwnProperty("teste"));
console.log(Tenis.hasOwnProperty("tamanho"));


console.log("tamanho" in Tenis);
console.log("teste" in Tenis);
