function dobrarEm5Segundos(value) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let newValue = value*5
            resolve(newValue)
        }, 5000);
    });
}
dobrarEm5Segundos(10).then((result)=>{
    console.log("O valor retornado é:", result)
});
   