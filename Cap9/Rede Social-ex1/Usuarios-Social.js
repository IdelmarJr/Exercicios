import { publicacao } from "./Publicacao-Social"
export class usuario {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.seguidores = [];
        this.seguindo = [];
        this.publicacoes = [];
        this.like = [];
    }
    /* Este método possibilita a criação de uma nova publicação, onde são fornecido\
    s o texto e possíveis mídias (como imagens ou vídeos), e então uma nova instância
    da classe Publicacao é criada com esses dados, associada ao usuário que a criou,
   e adicionada à sua lista de publicações. */
    criarPublicacao(texto, midia) {
        const novaPublicacao = new publicacao(this, texto, midia);
        this.publicacoes.push(novaPublicacao);
    }
    remover(removido){
        this.publicacoes.splice(removido, 1);
    }
    atualizar(editado){
        const publicacaoEditada = new publicacao(editado);
        this.publicacoes.push(publicacaoEditada);
    }
    /* Este método permite que o usuário atual comece a seguir outro usuário, adici\
    onando-o à sua lista de "seguindo" e também se registrando na lista de "seguidore
    s" daquele usuário. */
    seguirUsuario(usuarios) {
        this.seguindo.push(usuarios);
        usuarios.seguidores.push(this);
        console.log('Usuario adicionado aos seguidores.');
    }
    deixarDeSeguirUsuario(usuarios) {
        // Método para deixar de seguir outro usuário
        this.seguindo.splice(usuarios, 1);
        console.log('Usuario removido dos seguidores.');
    }
    curtida(curtir){
        let likes = new publicacao(this, curtir);
        this.like.push(likes);
    }
    desCurtida(descurtir){
        let des = new publicacao(this, descurtir);
        this.like.push(des);
    }
}