import { factorialInput, factorialOutput } from "./elements.js";

factorialInput.addEventListener("input", onFactorialInput);

function onFactorialInput(){
    let inputValue = parseInt(factorialInput.value)
    console.log(inputValue)
    let finalResult = factorial(inputValue)
    factorialOutput.value = finalResult
}

function factorial(n){
    let result = 1
    if (n < 0) {
        return "error"
    }
    else if (n == 0 || n == 1) {
        return 1;
    }
    else {
        while (n > 1) {
            result *= n
            n--
        }
    }
    return result;
}