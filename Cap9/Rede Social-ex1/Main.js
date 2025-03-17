console.clear();
import { usuario } from "./Usuarios-Social";

// Criando dois objetos de usuário
const usuario1 = new usuario("Alice", new Date("1990-05-15"));
const usuario2 = new usuario("Bob", new Date("1985-10-22"));
menu:
while (true) {

    const menu = `
    selecione uma opção:
    1 - Fazendo com que o usuário 2 siga o usuário 1.
    2 - Criando uma publicação para o usuário 1.
    3 - Editar comentário da própria publicação.
    4 - Remover comentário da própria publicação.
    5 - Curtindo a própria publicação.
    6 - Adicionando comentário à própria publicação.
    7 - Usuário curtindo publicação de outro usuário.
    8 - Descurtindo publicação de outro usuário.
    9 - Deixando de seguir o usuário 1.
    10 - Editar o conteúdo da publicação.
    11 - Remover a publicação do sistema.
    12 - Relatorio.
    0 - Encerrar programa.
    : `

    const opcao = parseInt(prompt(menu));
    switch (opcao) {
        case 1:
            // Fazendo com que o usuário 2 siga o usuário 1.
            usuario2.seguirUsuario(usuario1);
            break;
        case 2:
            // Criando uma publicação para o usuário 1.
            usuario1.criarPublicacao("Primeira pulicação somente texto");
            break;
        case 3:
           usuario1.comentarioEditado("Edição do comentário.");
            break;
        case 4:
            usuario1.comentarioRemovido();
            break;
        case 5:
            // Curtindo a própria publicação.
            usuario1.publicacoes[0].curtir();
            break;
        case 6:
            // Adicionando comentário à própria publicação.
            usuario1.publicacoes[0].comentar("Isto é um comentário");
        case 7:
            // Usuário curtindo publicação de outro usuário.
            usuario2.seguindo[0].publicacoes[0].curtir();
            break;
        case 8:
            usuario2.seguindo[0].publicacoes[0].desCurtida();
            break;
        case 9:
            usuario2.deixarDeSeguirUsuario();
            break;
        case 10:
            usuario1.atualizar('Nova publicação somente Texto');
            break;
        case 11:
            usuario1.remover()
            break;
        case 12:
            // Exibindo nomes dos usuários.
            console.log(usuario1.nome);
            console.log(usuario2.nome);
            // Exibindo quantidade de seguidores dos usuários.
            console.log(usuario1.seguidores.length);
            console.log(usuario2.seguidores.length);
            // Exibindo quantidade de "seguindo" dos usuários.
            console.log(usuario1.seguindo.length);
            console.log(usuario2.seguindo.length);
            // Exibindo das publicações do Usuário 1.
            console.log(usuario1.publicacoes);
            console.log(usuario1.publicacoes[0].curtidas);
            console.log(usuario1.publicacoes[0].comentarios);
            break;
        case 0:
            console.log('Sistema encerrado.');
            break menu;
        default:
            console.log('Error: opção invalida.');
    };
};
