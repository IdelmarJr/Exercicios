console.clear();
import { artista } from "./music-artista"
import { musica } from "./music-musica"
import { playList } from "./music-playlist"


const artistaTeste = new artista('artistaUser', 'url_foto.jpg');
const playListTeste = new playList('playListeUser');

menu:
while (true){
    const menu = `
    Selecione uma das opções:
    1 - Adicionar música:
    2 - Remover música:
    3 - Reproduzir música:
    4 - Exibir músicas do Artista:
    5 - Avançar música:
    6 - Pausar música:
    7 - Voltar música:
    0 - Sair.
    : `;
    const opcao = parseInt(prompt(menu));
    switch (opcao){
        case 1:
            adicionarMusic();
            break;
        case 2:
            removerMusic();
            break;
        case 3: 
            reproduzirMusic();
            break;
        case 4:
            listarMusic();
            break;
        case 5:
            avancoMusic();
            break;
        case 6:
            pausarMusic();
            break;
        case 7:
            voltarMusica();
            break;
        case 0:
            console.log('Sistema encerrado.');
            break menu;
        default:
            console.log('Opção inválida.');
    };
};

function adicionarMusic() {
    const titulo = prompt('Digite o título da música: ');
    const artista = prompt('Digite o nome do artista: ');
    const duracao = parseInt(prompt('Digite os segundos da duração da música: '));
    const arquivo = prompt('Digite o local do arquivo da música: ');

    const novaMusic = new musica(titulo, artista, duracao, arquivo);
    artistaTeste.adicionarMusicas(novaMusic);
    playListTeste.adicionarMusica(novaMusic);
}

function reproduzirMusic() {
    playListTeste.reproduzir();
}

function removerMusic() {
    const titulo = prompt("Digite o título da música que deseja ser removida :");
    const removerM = artistaTeste.musicas.find(a => a.titulo === titulo);

    if (removerM) {
        artistaTeste.removerMusicas(removerM);
        playListTeste.removerMusica(removerM);
    } else {
        console.log("Música não encontrada.");
    }
}

function listarMusic() {
    if (artistaTeste.musicas.length > 0) {
        artistaTeste.listaDeMusicas()
        console.log('Músicas do artista: ');
        artistaTeste.musicas.forEach(musica => {
            console.log(`: ${musica.titulo} (${musica.duracao} s)`);
        })
    } else {
        console.log("Nenhuma música encontrada para este artista.");
    }
}

function pausarMusic() {
    if (playListTeste.musicas.length > 0) {
        const musicaAl = playListTeste.musicas[playListTeste.posicaoIndex];
        musicaAl.pausar();
    } else {
        console.log('Sua playlist está vazia.');
    }
}

function avancoMusic() {
    playListTeste.avancarMusica();
}

function voltarMusica() {
    playListTeste.voltarMusica();
}