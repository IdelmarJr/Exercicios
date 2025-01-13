// Declaração de variavel dentro do bloco de código
function saudacao () {
    if (true) {
        const str = 'Seja bem - vindo!';
        return str
    }
}
// chamando a varial str fora do bloco de código de origem
function saida () {
    const saidaDesaudacao = saudacao()
    console.log(saidaDesaudacao)
}
saida()