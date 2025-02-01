var num1;
var num2;
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
        num1 = Number(button.textContent)
    })
})

const operatorBtns = document.querySelectorAll(".operatorBtns")
operatorBtns.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "+":
                operator = "+"
                break;
            case "-":
                operator = "-"
                break;
            case "*":
                operator = "*"
                break;
            case "/":
                operator = "/"
                break;
        }
        console.log(operator);
    })
})