let vari;

function entrada() {
    let numero = Number(prompt('Digite um número: '));
    vari = prompt('Digite uma operação: ');
    let numero2 = Number(prompt('Digite outro número: '));
    
    function soma() {
        return numero + numero2;
    }
    
    function subtracao() {
        return numero - numero2;
    }
    
    function multiplicacao() {
        return numero * numero2;
    }
    
    function divisao() {
        if (numero2 === 0) {
            return 'Erro: Divisão por zero';
        }
        return numero / numero2;
    }
    
    // Retorna a função correspondente à operação
    if (vari === '+') {
        return soma;
    } else if (vari === '-') {
        return subtracao;
    } else if (vari === '*') {
        return multiplicacao;
    } else if (vari === '/') {
        return divisao;
    } else {
        return 'Operação inválida';
    }
}

function test() {
    let operacao = entrada();  // Obtém a função de operação selecionada
    if (typeof operacao === 'function') {
        return operacao();  // Executa a função retornada pela entrada
    } else {
        return operacao;  // Se for uma mensagem de erro (como 'Operação inválida')
    }
}

// Resultado
function saida() {
    let resultado = test();  
    console.log(resultado);   
}

saida();
