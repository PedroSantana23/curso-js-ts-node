/*
    O strict mode elimina alguns erros silenciosos
    que passariam batido do JavaScript e os faz emitir erros.

    Além disso, essa forma corrige alguns erros que tornam o JavaScript
    difícil de ser otimizado, então algumas vezes os códigos no mode estrito
    rodam mais otimizados e velozes do que os código no 'modo normal.
*/

"use strict";

(() => {
    teste = "teste";
})();

console.log(teste)


