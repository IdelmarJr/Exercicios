let num = parseInt(prompt('Digite o valor de uma lado: '))
let num1 = parseInt(prompt('Digite o valor de outro lado: '))
let num2 = parseInt(prompt('Digite o valor de outro lado: '))

if ((num === num1) && (num1 === num2)){
    console.log('Triângulo Equilátero')
} else if (num === num1 || num1 === num2 || num === num2){
    console.log('Triângulo Isósceles')
} else {
    console.log('Triângulo escaleno')
}