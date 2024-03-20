var bruxos = ['Harry Potter', 'Hermione', 'Rony', 'Malfoi'];

var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();
do {
var bruxo = proximo.value;
chapeuSeletor.fazerSelecaoDaCasa(bruxo);
proximo = iterador.next();
} while (!proximo.done);