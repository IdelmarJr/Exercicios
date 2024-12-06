let m = parseInt(prompt('Digite um numero inteiro: '))
let n = parseInt(prompt('Digite outro numero inteiro: '))
/* 
(n % m) e (m % n) para quando o usuario digitar dois numeros inteiro
a ordem não ira interferir no resultado.
*/
let resultado = (n % m)
let resultado1 = (m % n)
if ( resultado === 0){
    console.log('Pelo menos um dos números é múltiplo do outro.')
} else if (resultado1 === 0){
    console.log('Pelo menos um dos números é múltiplo do outro.')
} else {    
    console.log('Nenhum dos números é múltiplo do outro.')
}
