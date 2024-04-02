// modelo1
const pontos = [
    [1,2],
    [3,4],
    [5,6]
  ];
  
let modelo_02 = pontos.reduce((referencia, ponto) =>{
    let[var1, var2] = ponto;
    referencia.push({x: var1, y: var2});
    return referencia
    
}, []);
console.log(modelo_02);