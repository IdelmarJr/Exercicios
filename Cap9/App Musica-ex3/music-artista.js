export class artista {
    constructor(nome, foto){
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }
    listaDeMusicas(){
        if(this.musicas > 0){
            return this.musicas;
        }else{
            console.log('Lista vazia.')
        }
    }

    adicionarMusicas(musica){
        this.musicas.push(musica);
        console.log('Música Adicionada.');
    }

    removerMusicas(musica){
        this.musicas.splice(musica, 1);
        console.log('Música Removida.');
    }
}