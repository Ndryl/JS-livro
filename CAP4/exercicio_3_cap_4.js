function soletraPalavra (palavra){
    var word = palavra.split("");
    var  iterador = word[Symbol.iterator]();
    var done = false;
    var proximo = iterador.next();
    do{
        a = proximo.value;
        console.log(a);
        proximo = iterador.next();
    }while(!proximo.done);
}
var palavra = 'Hello World!!';
soletraPalavra(palavra);