function doAction(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            let string = "Olá mundo";
            resolve(string)
        }, 2000)
    });
}

doAction().then((result) =>{
    console.log(result)
});