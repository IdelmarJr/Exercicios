let n = Math.floor(Math.ramdom() * 101);
let num = 0;
for (let cont = 0; cont < 10; conta++) {
    num = parseInt(prompt('Digite um numero: '));
    if(n === num) {
        console.log('Parabens você acertou!');
        console.log(n);
    } else {
        if (num > n){
            console.log('maior do que o numero secreto');
        } else {
            console.log('menor do que o numero secreto');
        }
    }
}
console.log('Numeros de tentativas esgotadas!');