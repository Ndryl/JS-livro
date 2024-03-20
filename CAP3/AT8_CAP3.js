var area_total = 0;
var dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ];
  function calculaAreaTotal(dimensoes){
    var area_tot = dimensoes.reduce(function(area_total, element){
        area = element.altura * element.comprimento;
        return area_total + area;
    }, 0);
    return area_tot;
  }
  var saida = calculaAreaTotal(dimensoes);
  console.log(saida);