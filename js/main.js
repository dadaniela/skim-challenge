import { factorialInput, factorialOutput } from "./elements.js";

factorialInput.addEventListener("input", onFactorialInput);

function onFactorialInput(){
    let inputValue = parseInt(factorialInput.value)
    let finalResult = factorial(inputValue)
    factorialOutput.value = finalResult
}

function factorial(n){
    if (isNaN(n)) {
        return "";
    }
    else if (n < 0) {
        return "invalid"
    }
    else if (n == 0 || n == 1) {
        return 1;
    }
    else {
        let result = 1
        while (n > 1) {
            result *= n
            n--
        }
        return result;  
    }
}