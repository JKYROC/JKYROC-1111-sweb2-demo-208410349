const userInput = document.querySelector('#input-number');
const C2FBtn = document.querySelector('#btn-f');
const F2CBtn = document.querySelector('#btn-C');

const Temperature = document.querySelector('#current-calculation')


const defaultResult = 0;
let currentResult = defaultResult;
function getUserInput() {
    return parseInt(userInput.value);   
}
function outputResult(result, text) {
    currentCalculationOutput.textContent = text;
    currentResultOutput.textContent = result;
}
function C2F () {
    const operand1 = currentResult;
    const operand2 = getUserInput();
    currentResult = operand2 * 9 / 5 + 32;
    console.log(`攝氏${operand2} = 華氏${operand1}`);
    const calculation = `${operand2} * 9 / 5 +32`;
    outputResult(currentResult, calculation);

}


C2FBtn.addEventListener('click' , C2F);
// F2CBtn.addEventListener('click' , F2CBtn);