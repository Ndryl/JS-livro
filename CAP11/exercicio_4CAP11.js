const caracteristicas = new Map();
caracteristicas.set('Nome', 'Hendryl');
caracteristicas.set('Idade', 24);

function saida(caracteristicas){
    let objetoNovo = {};
   for(caracteristica of caracteristicas.keys()){
        objetoNovo[caracteristica] = caracteristicas.get(caracteristica);
    }
    return objetoNovo;
 }
 console.log(saida(caracteristicas));