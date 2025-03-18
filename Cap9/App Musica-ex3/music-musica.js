export class musica {
    constructor(titulo, artista, duracao, arquivo){
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.arquivo = arquivo;
        this.ReproduzirMusica = false;
    }

    reproduzir(){
        this.ReproduzirMusica = true;
        console.log(`Reproduzindo atualmente: ${this.titulo} . ${this.artista}`);
    }

    pausar(){
        this.ReproduzirMusica = false;
        console.log(`Pausado: ${this.titulo} . ${this.artista}`);
    }
}