function every(array, func) {
    for (let i = 0; i < array.length; i++) {
        if (!func(array[i])) { 
            return false;
        }
    }
    return true; 
}

console.log(every([2, 4, 6, 8], x => x % 2 === 0));