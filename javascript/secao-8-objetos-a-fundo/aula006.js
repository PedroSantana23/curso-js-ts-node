let Tenis = {
    tamanho: 42,
    estoque: true,
};

Tenis.tamanho = 45;
Tenis.estoque = false;

// Adicionando dados ao objeto
Tenis.preco = "R$ 100";  
Tenis["cor"] = "vermelho";

console.log(Tenis);