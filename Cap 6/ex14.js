//Entrada de dados
function entrada1(){
    let altura = parseFloat(prompt('Digite sua altura: '));
    return altura;
}
function entrada2(){
    let peso = parseFloat(prompt('Digite seu peso: '));
    return peso;
}
//Calculo IMC
function imc(){
    let IMC1 = entrada1();
    let IMC2 = entrada2();
    let Imc = IMC2 / (IMC1 ** 2);
    return (Imc.toFixed(2));
}
//Classificação
function Classificacao(){
    let clas = imc()
    for (let Classificacao = 0; Classificacao = true;) {
        if (clas < 18.5) {
            console.log(`Seu IMC é: ${clas}`);
            console.log('Abaixo do peso: IMC < 18,5 kg/m²');
            break;
        } else if (18.5 <= clas && clas < 24.9) {
            console.log(`Seu IMC é: ${clas}`);
            console.log('Peso adequado: IMC entre 18,5 e 24,9 kg/m²');
            break;
        } else if (25 <= clas && clas < 29.9) {
            console.log(`Seu IMC é: ${clas}`);
            console.log('Sobrepeso: IMC entre 25 e 29,9 kg/m²');
            break;
        } else if (30 <= clas && clas < 34.9) {
            console.log(`Seu IMC é: ${clas}`);
            console.log('Obesidade grau I: IMC entre 30 e 34,9 kg/m²');
            break;
        } else if (35 <= clas && clas < 39.9) {
            console.log(`Seu IMC é: ${clas}`);
            console.log('Obesidade grau II: IMC entre 35 e 39,9 kg/m²');
            break;
        } else {
            clas >= 40;
            console.log(`Seu IMC é: ${clas}`);
            console.log('Obesidade grau III: IMC ≥ 40 kg/m²');
        }
    }
}
//Saida
function saida(){
    let saida1 = Classificacao();
    console.log(saida1);
}
saida()


