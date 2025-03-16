import { livro } from "./livro";
import { emprestimo } from "./emprestimo";
import { usuario } from "./usuario";

export class biblioteca {
    constructor(){
        this.livros = []; //armazenar os livros da biblioteca
        this.emprestimos = [];
    }
    adicionarLivro(){
        let titulo = prompt('Digite o Titulo do Livro: ');
        let autor = prompt('Digite o nome do Autor: ');
        let livrosNovos = new livro(titulo, autor); // cria um novo livro
        this.livros.push(livrosNovos); // adiciona o livro a biblioteca
        console.log(`Livro ${livrosNovos.titulo} adicionado!`)
    }
    listarLivros(){
        if(this.livros.length === 0){
            console.log('Biblioteca está vazia.');
        } else {
            console.log('Livros da biblioteca: ');
            this.livros.forEach((livro, index) => {
                console.log(`${index +1}. Titulo: ${livro.titulo}, Autor: ${livro.autor}, Dispinivel: ${livro.disponivel ? 'sim' : 'não'}`)
            });    
        }
    }
    emprestimo (){
        let titulo = prompt('Digite o titulo do livro: ').toLocaleUpperCase();
        let livrosIndex = new emprestimo(titulo);
        livrosIndex = livros.find((livro) => livro.titulo === titulo && livro.disponivel);
        if(!livrosIndex){
            console.log('Titulo não encontrado.');
            return;
        }
        let email = prompt('Digite seu email: ').toLocaleUpperCase();
        let senha = prompt('Digite a senha de identificação: ');
        let infoIndex = new usuario(email, senha);
        infoIndex = this.usuarioCadastrado.find((infoObj) =>  infoObj.email === email && infoObj.senha === senha);
        if(!infoIndex){
            console.log('Email ou Senha Incorreta.');
            return;
        } 
        livrosIndex.disponivel = false;
        this.emprestimos.push({nome: nome, titulo: titulo, dataEmprestimo: new Date()});
        console.log('Emprestimo realizado.');
    }
    devolucao (){
        if(this.emprestimos.length === 0){
            console.log('Não a emprestimos ativos.')
        }
        let pass = prompt('Digite sua senha: ')
        let book = prompt('Digite o titulo: ').toLocaleUpperCase();
        pass = this.senha.find((senhaUser) => {senhaUser.senha === senha});
        book = this.titulo.find((titleBook) => {titleBook.titulo === titulo});
        if(user && book && !titulo.disponivel){
            book.disponivel = true;
            this.emprestimos.splice(book, 1);
            console.log('Devolução realizada');
        }
    }
}