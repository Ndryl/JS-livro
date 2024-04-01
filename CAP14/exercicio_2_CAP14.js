function contaQuantidadedeVogaisNaoacentuadas(...strings){
    let contador = 0
    for(let string of strings){
        let stringLower = string.toLowerCase();
        const letras = [...stringLower];
        for(let letra of letras){
            if("aeiou".indexOf(letra) !== -1){
                contador++;
            }
        }
    }
    return contador;
}
console.log(contaQuantidadedeVogaisNaoacentuadas('Hendryl', 'Marques', 'Rocha'));
