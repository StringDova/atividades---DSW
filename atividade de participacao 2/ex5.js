prepend = (elemento, lista) => {
    return {
        valor: elemento.valor,
        restante: lista
    }
};

const lista = {
    valor: 76,
    restante: {
        valor: 45,
        restante: {
            valor: 92,
            restante: {
                valor: 33,
                restante: {
                    valor: 58,
                    restante: null
                }
            }
        }
    }
};

const elemento = {
    valor: 3,
    restante: {}
};
const novaLista = prepend(elemento, lista);
console.log(JSON.stringify(novaLista, null, 2));