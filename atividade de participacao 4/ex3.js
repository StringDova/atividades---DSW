function evenOrOdd(value){
    return new Promise((resolve, reject) => {
        if(isNaN(value)){
            reject({
                message:"Erro",
            });
        }else if(value%2 == 0){
            reject({
                message: "O valor par apresentado é:",
                valor:value
            })   
        }else{
            resolve({
                message: "O valor ímppar apresentado é:",
                valor:value
            })
        }
    });
}

evenOrOdd(20)
    .then((result) => console.log(result.message, result.valor))
    .catch((result) => console.log(result.message, result.valor ?? "."))
    
evenOrOdd(21)
    .then((result) => console.log(result.message, result.valor))
    .catch((result) => console.log(result.message, result.valor ?? "."))

evenOrOdd("Vinte")
    .then((result) => console.log(result.message, result.valor))
    .catch((result) => console.log(result.message, result.valor ?? "."))