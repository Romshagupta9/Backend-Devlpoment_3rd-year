function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}
//1st way to export functions
// module.exports = {
//     add,     
//     sub,
//     mul
// }

//2nd way to export functions-preferred
module.exports.add = add;
module.exports.sub = sub;
module.exports.mul = mul;

