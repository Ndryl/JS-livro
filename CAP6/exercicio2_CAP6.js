var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

var locais = new Map();
locais.set('São Paulo', 10.10);
locais.set('Rio de Janeiro', 12.30);
locais.set('Brasília', 14.70);
locais.set('Outros', 13.00);

var produto = 'Arroz';
var local = 'São Paulo';
function valor_total(produtos, locais, produto, local){
    var preco_produto = produtos.get(produto);
    var preco_frete = locais.get(local);
    return preco_frete + preco_produto;
}
var output = valor_total(produtos, locais, produto, local);
console.log("O total do valor é: " + output);