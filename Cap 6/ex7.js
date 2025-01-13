// variavel Global
let num = 5 

// variavel Local dentro da função
function soma(a) {
    let num1 = 4; 
    return a + num + num1;
}
console.log(soma(5));
console.log(num);