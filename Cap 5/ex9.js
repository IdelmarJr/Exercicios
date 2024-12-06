let peso = parseFloat((prompt('Digite seu peso(kg): ')));
let altura = parseFloat((prompt('Digite sua altura(m): ')));
let imc = parseFloat(peso / altura ** 2).toFixed(1)
switch (true) { 
    case imc < 18.5:
        console.log(`Seu IMC é: ${imc}`);
        console.log('Abaixo do peso: IMC < 18,5 kg/m²');
        break;
    case 18.5 <= imc && imc < 24.9:
        console.log(`Seu IMC é: ${imc}`);
        console.log('Peso adequado: IMC entre 18,5 e 24,9 kg/m²');
        break;
    case 25 <= imc && imc < 29.9:
        console.log(`Seu IMC é: ${imc}`);
        console.log('Sobrepeso: IMC entre 25 e 29,9 kg/m²');
        break;
    case 30 <= imc && imc < 34.9:
        console.log(`Seu IMC é: ${imc}`);
        console.log('Obesidade grau I: IMC entre 30 e 34,9 kg/m²');
        break;
    case 35 <= imc && imc < 39.9:
        console.log(`Seu IMC é: ${imc}`);
        console.log('Obesidade grau II: IMC entre 35 e 39,9 kg/m²');
        break;
    case imc >= 40:
        console.log(`Seu IMC é: ${imc}`);
        console.log('Obesidade grau III: IMC ≥ 40 kg/m²')
}