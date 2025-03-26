function nth(list, number) {
    if(number === 0 && list !== null){
        return list.valor; 
    }else if (list === null){
        return undefined; 
    }else{
      return nth(list.restante, number-1); 
    }
}

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

console.log(nth(lista, 0)); 
console.log(nth(lista, 1)); 
console.log(nth(lista, 2)); 
console.log(nth(lista, 3));
console.log(nth(lista, 4));
console.log(nth(lista, 5));