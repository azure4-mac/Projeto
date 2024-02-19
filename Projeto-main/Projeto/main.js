/* 
var n1 = Number(prompt("Escolha um valor"))
var n2 = Number(prompt("Escolha um valor"))
var n3 = Number(prompt("Escolha sua operação; 1 para add, 2 para mult, 3 para div"))
if(n3 === 1){
    add = n1 + n2
    alert("a soma é " + (add))
}
else if(n3 === 2){
    mult = n1 * n2
    alert("o produto é " + (mult))
}
else if (n3 === 3){
    div = n1 / n2
    alert("a divisão é " + (div))
}
else {
alert("Opção inválida por ser " + n3 + " deve ser 1, 2 ou 3")
}
*/
 let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
