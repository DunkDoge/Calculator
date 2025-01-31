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

const topHalfDisplay = document.querySelector(".topScreen");
const numBtns = document.querySelectorAll(".numberBtns");
numBtns.forEach((button) => {
    button.addEventListener("click", () => {
        topHalfDisplay.textContent += Number(button.textContent);
    })
})