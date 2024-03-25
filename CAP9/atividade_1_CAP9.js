function htmlify(strings, ...values){
  var itens = values[0].split(',');
  var shopItens = itens.map(function(value){
    return `<li>${value}<li>`;
  }).join("");

  return `<ul>${shopItens}</ul>`;
}
const compras = 'leite,feijão,arroz,mandioca';
var elemento = htmlify`${compras}`;

console.log(elemento)