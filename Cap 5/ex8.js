console.log('Opções do menu: 1.Pizza; 2.Hambúrguer; 3.Salada; 4.Macarrão');
let opcao = parseInt(prompt('Digite um numero do menu: '));

switch (opcao) {
    case 1:
        console.log('Preço: 20,50');
        console.log('Descrição: Pizza de calabresa com queijo, com bordas de catupiry');
        break;
    case 2:
        console.log('Preço: 10,50');
        console.log('Descrição: Hambúrguer de bacon com molho picante');
        break;
    case 3:
        console.log('Preço: 7,00');
        console.log('Descrição: Salada de beterraba, cenoura, cebola, com vinagre');
        break;
    case 4:
        console.log('Preço: 6,00');
        console.log('Descrição: Macarrão com molho');
        break;
    default:
        console.log('Opção invalida.');
}