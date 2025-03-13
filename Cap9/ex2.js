class livro {
    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;

    }
    cadastrarUsuario(){
        let usuario = {
            nome: prompt('Digite seu nome: ').toLocaleUpperCase(),
            email: prompt('Digite seu email: ').toLocaleUpperCase(),
        }

    }
}

class biblioteca {
    constructor(titulo){
        this.titulo = [];
    }
}

class usuario {
    constructor(nome, email, dataDenascimento){
        this.nome = nome;
        this.email = email;
        this.dataDenascimento = dataDenascimento;
    }
}

class emprestimo {
    constructor(nome, titulo, email){
        this.nome = nome;
        this.titulo = titulo;
        this.email = email;
        this.emprestimoAtivo = [];
    }
}
