var total = 0;
var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];
var interatorRua = ruas[Symbol.iterator]();
var done = false;
var proximo = interatorRua.next();
do{
    var a = proximo.value;
    total = total + a.tamanho;
    proximo = interatorRua.next();
}while(!proximo.done);
console.log(total);
