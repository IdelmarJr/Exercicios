let film = [];
let coment = [];

for (let i = 0; i < 5; i++){
    let filme = prompt('Digite um filme: ');
    let comentario = prompt('Digite um comentario: ');
    film.push(filme);
    coment.push(comentario);
};

film.forEach((filme, index) =>
    console.log(film[index], 'seu comentario é ' + coment[index])
);
