import { publicacao } from "./Publicacao-Social";
export class comentario {
    constructor(usuario, texto, edicaoPronta, removido) {
        this.usuario = usuario;
        this.dataComentario = new Date();
        this.texto = texto;
        this.edicaoPronta = edicaoPronta;
        this.removido = removido;
    }

    editar(novoTexto) {
        // Método para editar o conteúdo do comentário
        let edicao = new publicacao(this, novoTexto);
        if(edicao === undefined){
            console.log('Nenhuma edição realizada');
        }else{
            this.edicaoPronta = edicao;
            return;
        }
    }

    remover(removidoTexto) {
        // Método para remover o comentário do sistema
        let remov = new publicacao(this, removidoTexto);
        if(remov === undefined){
            console.log('Nenhum comentário removido.');
        }else{
            this.removido = remov;
            return;
        }
    }
}