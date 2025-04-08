function firstPromise(value){
    return new Promise((resolve, reject)=>{
        if(value>=2){
            resolve(value)
        }else{
            reject({
                message: "O valor é menor que 2, portando a primeira promise foi rejeitada"
            })
        }
    });
}
function secondPromise(value){
    return new Promise((resolve, reject)=>{
        if((value+1)%2==0){
            resolve(`O valor é: ${value}`);
        }else{
            reject({
                message: "O valor inserido é maior que 2, mas somado com 1 resulta em um número ímpar, portanto a segunda promise foi rejeitada"
            })
        }
    });
}


firstPromise(5)
    .then(data => secondPromise(data))
    .then(data =>{console.log(data)})
    .catch(e => {console.log(e)})
