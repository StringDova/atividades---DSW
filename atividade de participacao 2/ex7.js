let array = [[1, 2, 3], [4, 5], [6]];

const reducao = array.reduce((acumulador, valorAtual) => {
    return acumulador.concat(valorAtual)
}, []);
console.log(reducao);