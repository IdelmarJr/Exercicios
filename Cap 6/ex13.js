function entrada () {
    let real = Number(prompt('Digite um valor em Reais para ser convertido em Dolar: '));
    return real;
}

function conversao () {
    let dolar = entrada() / 6.10;
    return dolar;
}

function saida () {
    let dado = conversao()
    console.log(dado.toFixed(3));
}
saida()