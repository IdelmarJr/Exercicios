//Função de numero aleatorio 
function math() {
    let n = Math.floor(Math.random() * 101);
    return n;
}
//Calculo para a adivinhação
let cont;
function calculo() {
    let num = math();
    //console.log(num);
    for (cont = 100; cont > 0; cont--) {
        let numero = 0;
        numero = parseInt(prompt('Digite um número: '));
        if (cont === 0) {
            console.log('Número de tentativas esgotadas!');
            break;
        } else {
            if (num === numero) {
                console.log('Parabens você acertou!');
                console.log(num);
                break;
            } else if (numero > num) {
                console.log('Maior do que o número secreto!');
            } else {
                console.log('Menor do que o número secreto!');
            }
        }
    }
}
//Saida de resultado
function saidaDeresultado() {
    let saida = calculo();
    console.log(saida);
    console.log(cont);
}
saidaDeresultado()