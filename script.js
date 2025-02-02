var num1 = "";
var num2 = "";
var operator = "";

function add(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

/*
Logic for number buttons being clicked
*/
const topHalfDisplay = document.querySelector(".bottomScreen");
const numBtns = document.querySelectorAll(".numberBtns");
numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        topHalfDisplay.textContent += button.textContent;
        if (!operator) num1 = (topHalfDisplay.textContent);
        else num2 = (topHalfDisplay.textContent);
    })
})

/*
Logic for operator buttons being clicked
*/
const operatorBtns = document.querySelectorAll(".operatorBtns")
operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "+":
                operator = "+"
                topHalfDisplay.textContent = "";
                break;
            case "-":
                operator = "-"
                topHalfDisplay.textContent = "";
                break;
            case "*":
                operator = "*"
                topHalfDisplay.textContent = "";
                break;
            case "/":
                operator = "/"
                topHalfDisplay.textContent = "";
                break;
        }
        console.log(operator);
    })
})

/*
Logic for equals button being clicked
*/
const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener("click", () => {
    console.log(num1);
    console.log(num2);
    console.log(operator);

    if (num1 && num2 && operator){
        switch (operator){
            case "+":
                topHalfDisplay.textContent = add(Number(num1),Number(num2));
                num1 = topHalfDisplay.textContent;
                operator = "";
                break;
            case "-":
                topHalfDisplay.textContent = minus(Number(num1),Number(num2));
                num1 = topHalfDisplay.textContent;
                operator = "";
                break;
            case "/":
                topHalfDisplay.textContent = divide(Number(num1),Number(num2));
                num1 = topHalfDisplay.textContent;
                operator = "";
                break;
            case "*":
                topHalfDisplay.textContent = multiply(Number(num1),Number(num2));
                num1 = topHalfDisplay.textContent;
                operator = "";
                break;
        }
    }
})

/*
Logic for AC button being clicked
*/
acBtn = document.querySelector("#AC");
acBtn.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
    topHalfDisplay.textContent = "";
})