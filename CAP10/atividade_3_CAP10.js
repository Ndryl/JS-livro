let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(palavrao=>{ return palavrao.length });

console.log(tamanhos); // [ 22, 22, 44, 28 ]