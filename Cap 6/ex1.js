//1ª - Dado de entrada.
function entrada(){
    let nome = prompt('Digite seu nome: ');
    return nome
}
//2ª - Dado de saida.
function saida(){
    let nome2 = entrada()
    console.log(nome2);
}
//saida()
//3ª Manipulação de Strings.
function Manipulacao (){
    let a1 = 'bem';
    let b1 = 'vindo';
    let saudacao = a1 + ' ' + b1;
    console.log(saudacao);
}
//Manipulacao()
//4ª Operações soma
function soma(a, b){
    let resultado = a + b;
    console.log(resultado);
}
//soma(1,2)
//5ª operações logicas
function logica(a,b){
    if(a == 1 && b == 1){
        console.log('a e b é verdadeiro.');
    }else if (a == 1 || b == 1){
        console.log('Pelo menos a ou b é verdadeiro.');
    }else{
        console.log('Nem a e nem b é verdadeiro.');
    }
}
//logica(2,2)