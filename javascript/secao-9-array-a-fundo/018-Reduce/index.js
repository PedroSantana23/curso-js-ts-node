/*
    Reduce
    -> A ideia dele é pegar todos os valores de um Array e condensá-los em um só.
*/

const pedidos = [
    { id: 420, nome: "Pedro", alimento: "Hambúguer", bebida: "Suco de Uva", preco: 50 },
    { id: 35, nome: "Aurisan", alimento: "Macarrão", bebida: "Suco de Uva", preco: 35 },
    { id: 23, nome: "Isabella", alimento: "Danone", bebida: "Água", preco: 10},
    { id: 42, nome: "Angélica", alimento: "Macarrão", bebida: "Suco de Maracujá", preco: 35 },
];

const balancete = pedidos.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log("Total: R$ ", balancete);
console.log("Total de Clientes: ", pedidos.length);
