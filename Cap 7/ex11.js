let filmes = [];

for (let Teste = 0; Teste < 5; Teste++) {
    let nomeFilmes = prompt('Digite um filme: ');
    filmes.push(nomeFilmes);
};

filmes.forEach((filme) => {
    console.log(filme[1], 'Não é do aranha verso, é?');
    console.log(filme[2], 'Esse é oque você gosta? Menos pior do que a da Mary Rose.');
    console.log(filme[3], 'O ambiente perfeito é uma trilha sonora de respeito.');
    console.log(filme[4], 'Espero que no futuro, o gosto por isso seja melhor.');
    console.log(filme[5], 'É oque temos pra hoje, certo?');
    
});