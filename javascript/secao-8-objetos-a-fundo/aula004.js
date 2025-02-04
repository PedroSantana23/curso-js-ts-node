const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 123456,
    n: 5,
    link: { a: "a", b: { c: "C" } },
};

//const { tamanho, estoque, marcas = "Não possui marca" } = Tenis;

//console.log(tamanho, estoque, marcas);

const { 
    link: {
        b: { c },
    } 
} = Tenis;

console.log(c);

console.log(Tenis.link.a);
console.log(Tenis.link.b);
console.log(Tenis.link.b.c);
