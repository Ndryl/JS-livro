function soma(numeros){
    var sum = 0;
    for(numero of numeros){
        sum = sum + numero;
    }
    return sum;
}
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var output = soma(numeros);
console.log(output);