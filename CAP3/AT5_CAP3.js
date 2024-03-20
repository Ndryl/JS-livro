var numbers = [1, 2, 3, 3, 4, 5];

var n_duplicate = numbers.reduce(function(array, element){
    var verifique = array.filter(function(a){
        return a === element;
    });
    if (verifique.length === 0){
        array.push(element);
    }
    return array;
}, []);
console.log(n_duplicate);