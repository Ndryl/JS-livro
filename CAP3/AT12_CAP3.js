var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
    { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
];
var data = new Date('2016-03-01');
function existeProdutosDatados(produtos, data) {
    var a = produtos.some(function(element) {
        const [dia, mes, ano] = element.dataValidade.split("/");
        const data_formada = new Date(`${ano}-${mes}-${dia}T00:00:00`);
        return data_formada < data;
    });
    return a;
}
var retorna_aqui = existeProdutosDatados(produtos, data);
console.log(retorna_aqui);
