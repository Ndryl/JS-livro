var test = '()()()';
var sum =0;

var valid = test.split('').reduce(function(sum, element){
    if (sum < 0){
        return NaN;
    }
    else if(element === '('){
        return (sum + 1);
    }
    else{
        return (sum - 1);
    }
}, 0);
if(valid == 0){
    console.log("True");
}
else{
    console.log("False");
}