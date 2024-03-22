var dados_1 = {
    idade: 23,
    sexo: 'masculino'
};
var dados_2 = {
    idade: 18,
    sexo: 'feminino'
};
var dados_3 = {
    idade: 52,
    sexo: 'masculino'
};
var dados_4 = {
    idade: 27,
    sexo: 'feminino'
};



var amigos = new Map();
amigos.set('João Silva', dados_1);
amigos.set('Luisa Pimenta', dados_2);
amigos.set('Julio Marinho', dados_3);
amigos.set('Marcela Mel', dados_4);

var nome = 'Marcela Mel';

function delete_friend(amigos, nome){
    var examigo = amigos.get(nome);
    if(examigo === undefined){
        console.log("Você nem se quer o conhece");
    }
    else{
        amigos.delete();
        console.log(nome + " deletado de sua lista de amigos");
    }
}
delete_friend(amigos, nome);
