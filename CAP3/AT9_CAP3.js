var number = [0, 1, 4, 9, 16, 25];
function calculaRaizesQuadradas(number){
    var quadrado = number.map(function(element){
        return (Math.sqrt(element));
    });
    return quadrado;
}
var saida = calculaRaizesQuadradas(number);
console.log(saida);