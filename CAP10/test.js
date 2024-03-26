var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

var produto = 'Arroz';

function veracidade(produto){
    var input = produtos.get(produto);
    if(input === undefined){
        return false;
    }
    else{
        return true;
    }
}

var output = veracidade(produto);
console.log(output);