const fibonacci = function(x) {
    let a = 0;
    let b = 1;
    let arr = [a, b];
    let total;
    for(let i = 2; i <= x; i++){
        total = a + b;
        a = b;
        b = total;
        arr[i] = total;
    }
    if(+x < 0){
        return "OOPS";
    }else{
        return arr[+x];
    }
};

// Do not edit below this line
module.exports = fibonacci;
