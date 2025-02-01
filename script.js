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

const topHalfDisplay = document.querySelector(".bottomScreen");
const numBtns = document.querySelectorAll(".numberBtns");
numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        topHalfDisplay.textContent += Number(button.textContent);
        if (!operator) num1 = (button.textContent);
        else num2 = (button.textContent);
    })
})

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