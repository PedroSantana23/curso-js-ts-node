/*
    Objeto: Tenis (Propriedade) "cardaço", "palmilha"
    Objeto: Celular (Propriedade)
    Objeto: Drone (Propriedade)

    Propriedades / Atributos / Funcionalidades
*/

let Tenis = {
    tipo: "Corrida",
    cadarco: "G",
    estoque: true,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            altura: 15,
            largura: 25,
            comprimento: 45
        },
    },
    marcaArrayValores: ["Nike", "Adidas", "Puma"],
    marcaArrayObj: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Puma",
        },
    ],
    getMarcaArrayValores: function (param) {
        return this.marcaArrayObj[param];
    },
    getMarcaArrayValores: function (param) {
        return this.marcaArrayObj[param].nome;
    },
};

console.log(Tenis.cadarco);
console.log(Tenis.estoque);
