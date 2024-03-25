var numero = [1, 1, 2, 2, 3, 3];
var no_repeat = new Set();

for(const valor of numero){
    no_repeat.add(valor);
}
console.log(no_repeat);