
arrayToList = (array) => {
    if (array.length == 0){
        return null
    }
    
    return {
        valor: array[0],
        restante: arrayToList(array.slice(1))
    }

}

const array = [40, 27, 18, 21]
const lista = arrayToList(array)
console.log(JSON.stringify(lista, null, 2))