function sum(a,b){
    if(!a || !b){
        return "all arguments must be passed";
    }
    else if(typeof(a)!="number" || typeof(b)!="number"){
        return "all arguments must be numbers";
    }
    return a+b;
}
sum(2)// output will be undefined NaN because b is undefined

module.exports = sum;

