
const num1 = document.getElementById("num-1")
const num2 = document.getElementById("num-2")
const resultElement = document.getElementById("result")
const addButton = document.getElementById("but-1")
const mulButton = document.getElementById("but-2")

let firstNumber = parseInt(prompt('Enter first number: '))
let secondNumber = parseInt(prompt('Enter second number: '))

num1.innerText = firstNumber
num2.innerText = secondNumber

addButton.onclick =() => {
    addNumber()
}


function addNumber() {

    let sum = firstNumber + secondNumber
    resultElement.innerText = sum
    
}

mulButton.onclick =()=> {
    mulNumber()
}

function mulNumber() {

    let mul = firstNumber * secondNumber
    resultElement.innerText = mul
    
}