const myArrayObj = [
    { nome: "Pedro", sobrenome: "Henrique" },
    { nome: "Angélica", sobrenome: "Barbosa" },
    { nome: "Aurisan", sobrenome: "Souza" },
    { nome: "Pedro2", sobrenome: "Henrique" },
    { nome: "Pedro3", sobrenome: "Henrique" },
    { nome: "Pedro4", sobrenome: "Henrique" },
];

for (let item of myArrayObj) {
    if (item.nome === "Aurisan") {
        console.log("Pai");
        continue;
    }

    if (item.nome === "Angélica") {
        console.log("Mãe");
        break;
    }

    console.log(item);
}