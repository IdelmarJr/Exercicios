console.log('Escolha a escala Celsius (C) ou Fahrenheit (F)')
let temperatura = prompt("Digite C ou F: ")

if (temperatura === 'C'){
    let C = parseFloat(prompt('Digite a temperatura em Celsius para converter em Fahrenheit: '))
    C = (C * 9/5) + 32
    console.log(`A temperatura é ${C} °F`)
} else {
    let F = parseFloat(prompt('Digite a temperatura em Fahrenheit para converter em Celsius: '))
    F = (F - 32) * 5/9
    console . log(`A temperatura é ${F} °C`)
}