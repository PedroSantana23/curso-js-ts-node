const pedidos = [
    { id: 420, nome: "Pedro", alimento: "Hambúguer", bebida: "Suco de Uva" },
    { id: 35, nome: "Aurisan", alimento: "Macarrão", bebida: "Suco de Uva" },
    { id: 23, nome: "Isabella", alimento: "Danone", bebida: "Água" },
    { id: 42, nome: "Angélica", alimento: "Macarrão", bebida: "Suco de Maracujá" },
];

const filterSucoDeUva = pedidos.filter((element, index) => {
    return element.bebida === "Suco de Uva";
});

console.table(filterSucoDeUva);
