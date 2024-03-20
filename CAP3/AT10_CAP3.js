function clonaObjeto(objeto) {
    var copia = {};

    Object.getOwnPropertyNames(objeto).forEach(function(propriedade) {
        copia[propriedade] = objeto[propriedade];
    });

    return copia;
}

// Exemplo de uso
var objetoOriginal = { a: 1, b: 2, c: 3 };
var copiaDoObjeto = clonaObjeto(objetoOriginal);

console.log("Objeto Original:", objetoOriginal);
console.log("Cópia do Objeto:", copiaDoObjeto);
