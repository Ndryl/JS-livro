var propri;
var val;
var list = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
];
propri = 'nome';
val = 'Emilly';
function buscar (propriedade, valor, lista){
    var busca = lista.find(function(element){
        return element[propriedade] === valor;
    });
    return busca;
}
var saida = buscar(propri, val, list);
console.log(saida);



