import {
    factorialInput,
    factorialOutput,
    fizzbuzzInput
} from "./elements.js";

factorialInput.addEventListener("input", onFactorialInput);

function onFactorialInput(){
    let inputValue = parseInt(factorialInput.value)
    let finalResult = factorial(inputValue)
    factorialOutput.value = finalResult
};

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
};

fizzbuzzInput.addEventListener("input", onFizzbuzzInput);

function onFizzbuzzInput(){
    let inputValue = parseInt(fizzbuzzInput.value)
    fizzbuzz(inputValue)
};

function fizzbuzz(userInput){
    let i;
    for (i = 1; i <= userInput; i++){
        if (i % 15 == 0 && i > 0){
            console.log("SKIM is a great place to work!!");
        }
        else if (i % 3 == 0){
            console.log("SKIM");
        }
        else if (i % 5 == 0){
            console.log("is a great place to work!!");
        }
        else{
            console.log(i)
        }
    }
};