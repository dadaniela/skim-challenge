import {
    factorialInput,
    factorialOutput,
    fizzbuzzInput
} from "./elements.js";

factorialInput.addEventListener("input", onFactorialInput);

function onFactorialInput() {
    const factValue = parseInt(factorialInput.value);
    const finalResult = factorial(factValue);
    factorialOutput.value = finalResult;
}

function factorial(n) {
    if (isNaN(n)) {
        return "";
    }
    else if (n < 0) {
        return "invalid";
    }
    else if (n == 0 || n == 1) {
        return 1;
    }
    else {
        let result = 1;
        while (n > 1) {
            result *= n;
            n--;
        }
        return result;
    }
}

fizzbuzzInput.addEventListener("input", onFizzbuzzInput);

function onFizzbuzzInput() {
    const fbValue = parseInt(fizzbuzzInput.value);
    fizzbuzz(fbValue);
}

function fizzbuzz(userInput) {
    const firstMsg = "SKIM";
    const secondMsg = "is a great place to work!!";

    for (let i = 1; i <= userInput; i++) {
        if (i % 15 == 0) {
            console.log(`${firstMsg} ${secondMsg}`);
        }
        else if (i % 3 == 0) {
            console.log(firstMsg);
        }
        else if (i % 5 == 0) {
            console.log(secondMsg);
        }
        else {
            console.log(i);
        }
    }
}