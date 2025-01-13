//Solicitando a entrada de dados
function entrada () {
    let numero = Number(prompt('Digite o primeiro número: '));
    let numero2 = Number(prompt('Digite o segundo número: '));
    return [numero, numero2];
}
// calculo
function media(dado) {
    let resultado = dado[0] + dado[1];
    let mediaFinal = resultado / 2
    return mediaFinal;
}
// Exibição de resultado
function exibir () {
    let mediaExibicao1 = entrada();
    let mediaExibicao2 = media(mediaExibicao1);
    console.log(mediaExibicao2);
}
exibir()