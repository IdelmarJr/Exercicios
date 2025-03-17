import { comentario } from "./Comentario-Social";
import { usuario } from "./Usuarios-Social";
export class publicacao {
    constructor(usuarios, descricao, midia, editado, removido) {
        this.usuarios = usuarios;
        this.dataPublicacao = new Date(); // Pega a data atual
        this.descricao = descricao;
        this.midia = midia;
        this.curtidas = 0;
        this.comentarios = [];
        this.editado = editado;
        this.removido = removido
    }

    editar(novoTexto, novaMidia) {
        // Método para editar o conteúdo da publicação
        let novoTextoId = new usuario(this, novoTexto);
        this.editado = novoTextoId;     
        let novaMidiaId = new publicacao(this.midia, novaMidia);
        this.midia = novaMidiaId;
    }

    remover(publicacoes) {
        // Método para remover a publicação do sistema
        let RpublicacaoId = new usuario(this, publicacoes);
        this.removido = RpublicacaoId;
    }

    /* Este método é responsável por incrementar o contador de curtidas da publicaç\
    ão. Quando um usuário curte uma publicação, esse método é chamado, e o contador d
    e curtidas é aumentado em 1. */
    curtir() {
        this.curtidas++;
    }

    descurtir() {
        // Método para decrementar o contador de curtidas da publicação
        this.curtidas--;
    }

    /* Este método permite adicionar um novo comentário à publicação. Quando um usu\
    ário comenta em uma publicação, este método é invocado. Ele cria uma nova instânc
    ia da classe Comentario, utilizando o usuário que está comentando e o texto do co
    mentário. Em seguida, esse novo comentário é adicionado ao array comentarios da p
    ublicação. */
    comentar(texto) {
        const novoComentario = new comentario(this.usuarios, texto);
        this.comentarios.push(novoComentario);
    }
    comentarioEditado (edicaoPronta){
        let comentarioEditado = new comentario(this, edicaoPronta);
        this.comentarios.push(comentarioEditado);
    }
    comentarioRemovido (removido){
        let remover = new comentario(this, removido);
        this.comentarios.splice(remover, 1)
    }
}