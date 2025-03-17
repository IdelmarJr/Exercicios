console.clear();

import { biblioteca } from "./B-biblioteca";
const bibliotecas = new biblioteca;

menu:
while (true){
    const menu = `
    Selecione uma das opções:
    1 - Cadastrar livro:
    2 - Exibir lista de livros:
    3 - Cadrastrar Usuário:
    4 - Exibir lista de Usuários:
    5 - Realizar empréstimos de livros:
    6 - Registrar devoluções de livros:
    0 - Sair.
    : `;
    const opcao = parseInt(prompt(menu));
    switch (opcao){
        case 1:
            bibliotecas.adicionarLivro();
            break;
        case 2:
            bibliotecas.listarLivros();
            break;
        case 3: 
            bibliotecas.cadastrarUsuario();
            break;
        case 4:
            bibliotecas.listarUsuarios();
            break;
        case 5:
            bibliotecas.emprestimo();
            break;
        case 6:
            bibliotecas.devolucao();
            break;
        case 0:
            console.log('Sistema encerrado.');
            break menu;
        default:
            console.log('Opção inválida.');
    };
};