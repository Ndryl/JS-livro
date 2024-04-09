//console.log("Hello world");

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
let soma = array.reduce((sum, element) => {
  return (sum += element);
}, 0);

console.log(soma);
