let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: { a: "a", b: { c: "c" } } };

let clone1 = JSON.parse(JSON.stringify(Tenis)); // transforma em String e faz o parse()

console.log(1, clone1);
console.log(2, Tenis);

