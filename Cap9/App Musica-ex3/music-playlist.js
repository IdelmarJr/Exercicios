
export class playList {
    constructor(nome){
        this.nome = nome;
        this.musicas = [];
        this.posicaoIndex = 0
    }

    adicionarMusica(musica){
        this.musicas.push(musica);
        console.log('Música Adicionada a PlayList.');

    }

    removerMusica(musica){
        this.musicas.splice(musica, 1);
        console.log('Música Removida da PlayList.');
    }
    
    reproduzir(){
        if (this.musicas.length < 0){
            console.log('PlayList Vazia.');
        }else{
            this.musicas[this.posicaoIndex].reproduzir();
        }
    }
    
    avancarMusica(){
        if(this.posicaoIndex < this.musicas.length - 1){
            this.musicas[this.posicaoIndex].pausar();
            this.posicaoIndex++;
            this.reproduzir();
        }else{
            console.log('A playList está na última música.')
        }
    }

    voltarMusica(){
        if(this.posicaoIndex > 0){
            this.musicas[this.posicaoIndex].pausar();
            this.posicaoIndex--;
            this.reproduzir();
        }else{
            onsole.log('A playList está na primeira música.')
        }
    }
}