function bingo(...value){
    return value.reduce((base, valor) =>{
        console.log(`A bola escolhida foi: ${valor}`);
    }, 0);
};
bingo(1, 2, 3);