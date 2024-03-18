var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
]
var aprovado = alunos.filter(function(element){
    return (element.media >= 6.5);
})
console.log(aprovado);