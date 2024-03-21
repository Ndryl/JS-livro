var rua = ['Rua 1', 'Rua 2', 'Rua 3', 'Rua 4'];
for (var naoVaPorAi of rua){
    if(naoVaPorAi === 'Rua 3'){
        continue;
    }
    console.log(naoVaPorAi);
}