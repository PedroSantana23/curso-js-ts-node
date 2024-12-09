/* 
    Escopo:
    Determina quais 
    são os dados que podem
    ser acessados em uma determinada
    parte do código.
*/


// As variáveis criadas dentro de um bloco de código, só podem ser acessadas dentro do bloco de código.
{
    let nome = "Pedro";
    console.log(nome);
}

console.log(nome); // Erro