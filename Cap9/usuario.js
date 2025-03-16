console.clear();
export class usuario {
    constructor(nome, email, senha, dataDenascimento){
        this.nome =  nome;
        this.email = email;
        this.senha = senha;
        this.dataDenascimento = dataDenascimento;
        this.usuariosCadastrado = []; 
    }  

    cadastrarUsuario(){
        let nome = prompt('Digite seu nome: ');
        let email = prompt('Digite seu email: ');
        let data = parseInt(prompt('Digite a sua data de nascimento: '));
        let senha = parseInt(prompt('Digite uma senha para a identificação: '));
        let usuarioNovos = new usuario(nome, email, senha, data);
        this.usuariosCadastrado.push(usuarioNovos); 
        console.log(`Usuario ${usuarioNovos.nome} adicionado!`);     
        
    }
    listarUsuarios(){
        if(this.usuariosCadastrado.length === 0){
            console.log('Lista de Usuarios vazia!');
        } else {
            console.log('Lista de Usuarios: ');
            this.usuariosCadastrado.forEach((usuario, index) => {
                console.log(`${index +1}. Usuario: ${usuario.nome}, Email: ${usuario.email}, Data de Nascimento: ${usuario.dataDenascimento}`);
            });
        }
    }
}
