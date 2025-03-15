class livro {
    constructor(autor, titulo){
        this.autor = autor.toLocaleUpperCase();
        this.titulo = titulo.toLocaleUpperCase();
        this.disponivel = true;
    }
}

class biblioteca {
    constructor(){
        this.livros = []; //armazenar os livros da biblioteca
    }
    adicionarLivro(){
        let titulo = prompt('Digite o Titulo do Livro: ');
        let autor = prompt('Digite o nome do Autor: ');
        let livro = new livro(autor, titulo); // cria um novo livro
        this.livros.push(livro); // adiciona o livro a biblioteca
        console.log(`Livro ${livro.titulo} adicionado!`)
    }
    listarLivros(){
        if(this.livros.length === 0){
            console.log('Biblioteca está vazia.');
        } else {
            console.log('Livros da biblioteca: ');
            this.livros.forEach((livro, index) => {
                console.log(`${index}. Titulo: ${livro.titulo}, Autor: ${livro.autor}, Dispinivel: ${livro.disponivel ? 'sim' : 'não'}`)
            });    
        }
    }
    //emprestimo (){}
    //devolucao (){}
    
}

class usuario {
    constructor(nome, email, dataDenascimento){
        this.nome = nome.toLocaleUpperCase();
        this.email = email.toLocaleUpperCase();
        this.dataDenascimento = dataDenascimento;
        this.usuarioCadastrado = [];
    }
}
class usuariosCadastrado {
    cadastrarUsuario(){
        let nome = prompt('Digite seu nome: ');
        let email = prompt('Digite seu email: ');
        let usuario = new usuario(nome, email, this.dataDenascimento);
        this.usuarioCadastrado.push(usuario); 
        console.log(`Usuario ${usuario.nome} adicionado!`);     
        
    }
    listarUsuarios(){
        if(this.usuarioCadastrado.length === 0){
            console.log('Lista de Usuarios vazia!');
        } else {
            console.log('Lista de Usuarios: ');
            this.usuarioCadastrado.forEach((usuario, index) => {
                console.log(`${index}. Usuario: ${usuario.nome}, Email: ${usuario.email}, Data de Nascimento: ${usuario.dataDenascimento}`);
            });
        }
    }
}