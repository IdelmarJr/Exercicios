// converte o objeto Date para um valor numérico usando Number como uma função.
var d = new Date("December 17, 1995 03:24:00");
console.log(Number(d));

//Accessando elementos de um array.
var arr = ["este é o primeiro elemento", "este é o segundo elemento"];
console.log(arr[0]); // exibe 'este é o primeiro elemento'
console.log(arr[1]); // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'

//Retorna o módulo, ou valor absoluto, de um número (|x|).
Math.abs(x)