const produto = {
    nome: 'Whiskys Old Par',
    preco: 200,
    quantidade: 14,
    valorTotal: function valor() {
        return this.preco * this.quantidade
    },
};
console.log(produto.valorTotal());
