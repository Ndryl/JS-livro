var lista = [1, 2, 3, 4, 5];
var inter = lista[Symbol.iterator]();
var done = false;
var proximo = inter.next();
do{
    console.log(proximo);
    proximo = inter.next();
}while(!proximo.done);