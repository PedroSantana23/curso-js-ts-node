const pedidos = [
    { id: 420, nome: "Pedro", alimento: "Hambúguer", bebida: "Suco de Uva" },
    { id: 35, nome: "Aurisan", alimento: "Macarrão", bebida: "Suco de Laranja" },
    { id: 23, nome: "Isabella", alimento: "Danone", bebida: "Água" },
    { id: 42, nome: "Angélica", alimento: "Fígado", bebida: "Suco de Maracujá" },
];

/*
    O método map não só itera todo um Array, ele também é muito bom para editar o iterado
*/

pedidos.map((element, index) => {
    if(element.id === 42 && element.alimento === "Fígado") {
        return (element.alimento = "Macarrão");
    }
});

console.table(pedidos);