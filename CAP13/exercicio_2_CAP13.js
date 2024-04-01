function todosSaoMaioresQue(comp, ...value){
    let retorno = value.reduce((cont, valor) =>{
        if(valor < comp){
            return false;
        }
    }, 0);
    if(retorno === false){
        return false;
    }
    else{
        return true;
    }
}
console.log(todosSaoMaioresQue(5, 4, 3, 2, 1));