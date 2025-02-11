const pedidos = [
    { id: 420, nome: "Pedro", alimento: "Hambúguer", bebida: "Suco de Uva" },
    { id: 35, nome: "Aurisan", alimento: "Macarrão", bebida: "Suco de Uva" },
    { id: 23, nome: "Isabella", alimento: "Danone", bebida: "Água" },
    { id: 42, nome: "Angélica", alimento: "Macarrão", bebida: "Suco de Maracujá" },
];

/*
    Retorna o primeiro valor encontrado no Array.
*/

const findId = pedidos.find((element, index) => {
    return element.id === 35;
});

console.table(findId);
