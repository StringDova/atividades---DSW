const add = (n1, n2) => n1+n2;
const multiply = (n1, n2) => n1*n2;

function executeFunction(fun, n1, n2){
    value = fun(n1, n2);
    return value;
}
console.log(executeFunction(add, 2, 3));
console.log(executeFunction(multiply, 2, 3));