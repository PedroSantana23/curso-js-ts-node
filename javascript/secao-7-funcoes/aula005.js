// IIFE = Immediately Invoked Function Expression -> Expressão de função invocada imediatamente

(function (num1, num2) {
    const calc = num1 + num2
    console.log("Pedro Henrique");
    console.log(calc)
})(1, 2);

(() => {
    console.log(1*1)
})();
