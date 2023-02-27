let value1 = prompt("Enter your number")
let value2 = prompt("Enter your number")
let operator = prompt("enter an operator")

let num1 = parseInt(value1)
let num2 = parseInt(value2)

if (operator === "+"){
    let sum = num1 + num2;
    alert(sum);
}

else if (operator === "-"){
    let sum = num1 - num2;
    alert(sum);
}

else if (operator === "*"){
    let sum = num1 * num2;
    alert(sum);
}

else if (operator === "/"){
    let sum = num1 / num2;
    alert(sum);
}
