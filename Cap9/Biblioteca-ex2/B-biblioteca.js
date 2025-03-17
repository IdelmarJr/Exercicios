import { livroOb } from "./B-livro";
import { emprestimoOb } from "./B-emprestimo";
import { usuarioOb } from "./B-usuario";

export class biblioteca {
    constructor() {
        this.livros = []; //armazenar os livros da biblioteca
        this.emprestimos = [];
        this.usuariosCadastrado = [];
    }
    adicionarLivro() {
        let titulo = prompt('Digite o Titulo do Livro: ').toLocaleUpperCase();
        let autor = prompt('Digite o nome do Autor: ').toLocaleUpperCase();
        let livrosNovos = new livroOb(titulo, autor); // cria um novo livro
        this.livros.push(livrosNovos); // adiciona o livro a biblioteca
        console.log(`Livro ${livrosNovos.titulo} adicionado!`);
    }
    listarLivros() {
        if (this.livros.length === 0) {
            console.log('Biblioteca está vazia.');
        } else {
            console.log('Livros da biblioteca: ');
            this.livros.forEach((livro, index) => {
                console.log(`${index + 1}. Titulo: ${livro.titulo}, Autor: ${livro.autor}, Dispinivel: ${livro.disponivel ? 'sim' : 'não'}`)
            });
        }
    }
    cadastrarUsuario() {
        let nome = prompt('Digite seu nome: ').toLocaleUpperCase();
        let email = prompt('Digite seu email: ').toLocaleUpperCase();
        let senha = parseInt(prompt('Digite uma senha numerica para a identificação: '));
        let usuarioNovos = new usuarioOb(nome, email, senha);
        this.usuariosCadastrado.push(usuarioNovos);
        console.log(`Usuario ${usuarioNovos.nome} adicionado!`);

    }
    listarUsuarios() {
        if (this.usuariosCadastrado.length === 0) {
            console.log('Lista de Usuarios vazia!');
        } else {
            console.log('Lista de Usuarios: ');
            this.usuariosCadastrado.forEach((usuario, index) => {
                console.log(`${index + 1}. Usuario: ${usuario.nome}, Email: ${usuario.email}.`);
            });
        }
    }
    emprestimo() {
        let titulo = prompt('Digite o titulo do livro: ').toLocaleUpperCase();
        let livro = this.livros.find((livro) => livro.titulo === titulo && livro.disponivel);
        if (!livro) {
            console.log('Titulo não encontrado.');
        } else {
            let email = prompt('Digite seu email: ').toLocaleUpperCase();
            let senha = parseInt(prompt('Digite a senha numerica de identificação: '));
            let usuario = this.usuariosCadastrado.find((usuario) => usuario.email === email && usuario.senha === senha);
            if (usuario) {
                livro.emprestar();
                let novoEmprestimo = new emprestimoOb();
                let dataEmprestimos = new Date();
                this.emprestimos.push(novoEmprestimo, dataEmprestimos);
                console.log('Emprestimo realizado.');
            } else {
                console.log('Email ou Senha Incorreta.');
            }
        }
    }
    devolucao() {
        if (this.emprestimos.length === 0) {
            console.log('Não a emprestimos ativos.');
        }else {
            let pass = parseInt(prompt('Digite sua senha numerica: '));
            pass = this.usuariosCadastrado.find((passOb) => passOb.senha === pass);
            if(pass){
                let book = prompt('Digite o titulo: ').toLocaleUpperCase();
                book = this.livros.find((bookOb) => bookOb.titulo === book);
                if (book) {
                    book.disponivel = true;
                    this.emprestimos.splice(book, 1);
                    console.log('Devolução realizada');
                }else{
                    console.log('titulo invalido.')
                }
            } else{
                console.log('senha invalida.')
            }      
        }
        
    }
}