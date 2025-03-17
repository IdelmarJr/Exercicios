export class livroOb {
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
        this.disponivel = true;
    }
    emprestar(){
        if(this.disponivel){
            this.disponivel = false;
            console.log(`livro ${this.titulo} emprestado.`)
        } else {
            console.log(`livro ${this.titulo} não disponivel.`)
        }
    }
}