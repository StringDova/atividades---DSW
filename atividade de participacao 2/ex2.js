function deepEqual(a, b) {
    if(a === b){
        return true;
    }

    if(typeof a !== 'object' || typeof b !== 'object' || a === null || b === null){
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);


    if(keysA.length !== keysB.length){
        return false;
    }


    for(let key of keysA){
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
        return false;
        }
    }
    return true;
};
const object1 = { param1: "valor1", param2: "valor2" };
const object2 = { param1: "valor1", param2: "valor2" };
const object3 = { param1: "valor1", param2: "outroValor" };
const object4 = { param1: "valor1" };

console.log(deepEqual(object1, object2)); // true
console.log(deepEqual(object1, object3)); // false
console.log(deepEqual(object1, object4)); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual(null, object1)); // false