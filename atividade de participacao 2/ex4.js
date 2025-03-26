function listToArray(lista){
    let arr = [];
    for (let node = lista; node !== null; node = node.restante) {
      arr.push(node.valor); 
    }
    return arr;
};
  

const lista = {
    valor: 5,
    restante: {
        valor: 2,
        restante: {
            valor: 9,
            restante: null
        }
    }
};

const lista2 = {
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

console.log(listToArray(lista));
console.log(listToArray(lista2));
