// Entrada e dados
function entradadenotas () {
    let nota1 = parseFloat(prompt('Digite a primeira nota: '));
    let nota2 = parseFloat(prompt('Dgite a segunda nota: '));
    let nota3 = parseFloat(prompt('Digite a terceira nota: '));
    return [nota1, nota2, nota3];
    
}
// Calculos das notas
function calculo (index) {
    let resultado = index[0]+index[1]+index[2];
    let saidadenota = resultado / 3;
    return saidadenota;
}
// Saída de dados
function saida() {
    let numero = entradadenotas()
    let saidanota = calculo(numero)
    console.log(saidanota)
}
saida()