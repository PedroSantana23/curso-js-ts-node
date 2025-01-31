/*
    1 - Nome de função
    2 - Retorno
    3 - Não tem Hoisting
    4 - Arguments
*/

function nomeFunc() {
    return "Pedro Henrique";
}

console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "Pedro Henrique";
}

console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "Pedro Henrique";

console.log(nomeFuncArrowReturn());



/*
    5 - Não pode ser invocada com New
*/

/*
    6 - Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
    no momento da chamada

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
    como contexto global, que no caso dos navegadores é window
*/

const lanches = {
    cardapio: [
        { nome: "x-salada", preco: "R$ 25" },
        { nome: "x-tudo", preco: "R$ 30" },
    ],

    meuPedidoFunc: function (select) {
        return console.log(this.cardapio[select]);
    },

    meuPedidoFuncTimeOut: function () {
        setTimeout(function () {
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 1000);
    },

    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
            { nome: "x-salada", preco: "R$ 25" },
            { nome: "x-tudo", preco: "R$ 30" },
        ];

        return console.log(this.cardapio[select]);
    },
}

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(1);
lanches.meuPedidoFuncTimeOut();

/*
    7 - Contructor
    Arrow functions não podem ser constructor, então não é possível usar o operador
    new com a mesma.

    OBS: Hoisting não funciona com arrow function
*/

