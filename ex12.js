let num = parseInt(prompt('Digite um numero positivo: '));
let result = num;
if (num === 0 || num === 1){
    result = 1;
} else {
    while (num > 1) {
    num --;
    result *= num;
}
}
console.log(result);