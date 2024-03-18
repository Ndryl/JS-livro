var lista = [0, 1, 2, 3, 4, 5];

lista.forEach(function(element){
    if(element % 2 == 0){
        console.log(element + ' é par');
    }
    else{
        console.log(element + ' é ímpar');
    }
});