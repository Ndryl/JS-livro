var lista = [];
var interador = lista[Symbol.iterator]();
var done = false;
var proximo = interador.next();
if(proximo.done === false){
    console.log(true);
}
else{
    console.log(false);
}