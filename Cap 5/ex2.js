let num = parseFloat(prompt("Digite um numero: "))
let num1 = parseFloat(prompt("Digite outro numero: "))
let num2 = parseFloat(prompt("Digite outro numero: "))

if (num > num1){
    console.log(`maior ${num}`)
} else if (num1 > num2){
    console.log(`maior ${num1}`)
} else {
    console.log(`maior ${num2}`)
}