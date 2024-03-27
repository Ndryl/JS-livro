// var dimensoes = function(comprimento, alturaInicial) {
//     var altura = alturaInicial * 9 /16;
//     return { comprimento : comprimento, altura : altura };
//   }
let comprimento = 5;
let altura = 5;

let dados = {
    comprimento,
    altura,
    dimensoes(comprimento, altura){
        console.log(`Comprimento: ${this.comprimento}, Altura: ${this.altura}`);
    }
};
dados.dimensoes(comprimento, altura);