function somar(value1, value2){
    return new Promise((resolve, reject) =>{
        const sum = value1 + value2;
        if (sum%2==0){
            resolve(callbackSucesso(sum))
            return;
        }
        reject(callbackError(sum));
    });
}
 
function callbackSucesso(sum){
    return(`Resposta gerada com sucesso, o número somado é par: ${sum}`);
}
function callbackError(sum){
    return(`A operação falhou, resultando em um número ímpar: ${sum}`);
}
somar(10,2)
    .then(console.log)
    .catch(console.error)

somar(10,3)
    .then(console.log)
    .catch(console.error)
