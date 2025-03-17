/*const soma = (a, b) => {
    return a + b;    
};*/

//q1ª.
//1ª - Dado de entrada.
const entrada = () => {
    let nome = prompt('Digite seu nome: ');
    return nome;
};
//2ª - Dado de saida.
const saida = () => {
    let nome2 = entrada();
    console.log(nome2);
};
//saida()
//3ª Manipulação de Strings.
const Manipulacao = () => {
    let a1 = 'bem';
    let b1 = 'vindo';
    let saudacao = a1 + ' ' + b1;
    console.log(saudacao);
};
//Manipulacao()
//4ª Operações soma
const soma1 = (a, b) => {
    let resultado = a + b;
    console.log(resultado);
};
//soma1(1,2)
//5ª operações logicas
const logica = (a,b) => {
    if(a == 1 && b == 1){
        console.log('a e b é verdadeiro.');
    }else if (a == 1 || b == 1){
        console.log('Pelo menos a ou b é verdadeiro.');
    }else{
        console.log('Nem a e nem b é verdadeiro.');
    };
};
//logica(2,2)


//q3ª.
// Entrada e dados
const entradadenotas = () => {
    let nota1 = parseFloat(prompt('Digite a primeira nota: '));
    let nota2 = parseFloat(prompt('Dgite a segunda nota: '));
    let nota3 = parseFloat(prompt('Digite a terceira nota: '));
    return [nota1, nota2, nota3];
    
};
// Calculos das notas
const calculo = (index) => {
    let resultado = index[0]+index[1]+index[2];
    let saidadenota = resultado / 3;
    return (saidadenota.toFixed(2

    ));
};
// Saída de dados
const saida1 = () => {
    let numero = entradadenotas();
    let saidanota = calculo(numero);
    console.log(saidanota);
};
saida1();

//q4ª.
const saudacao1 = () => {
    console.log('Bem vindo!');
};
saudacao1();


//q5ª.
const media = (a, b, c) => {
    return (a + b + c) / 3;     
};
console.log(media(6,7,8));


//q6ª.
const quadrado = (a) => {
    return a ** 2;
};
console.log(quadrado(8));


//q7ª.
// variavel Global
let num = 5;

// variavel Local dentro da função
const soma = (a) => {
    let num1 = 4; 
    return a + num + num1;
};
console.log(soma(5));
console.log(num);


//q8ª.
// Declaração de variavel dentro do bloco de código
const saudacao2 = () => {
    if (true) {
        const str = 'Seja bem - vindo!';
        return str;
    };
};
// chamando a varial str fora do bloco de código de origem
const saida2 =  () => {
    const saidaDesaudacao = saudacao2();
    console.log(saidaDesaudacao);
};
saida2();