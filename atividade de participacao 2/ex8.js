function convertDateToString(date){
    months = {"01":"janeiro", "02":"fevereiro", 
        "03":"março", "04":"abril", "05":"maio", 
        "06":"junho", "07":"julho", "08":"agosto", 
        "09":"setembro", "10":"outubro", 
        "11":"novembro", "12":"dezembro"}

    let arrDateSplited = date.split("/");
    return `${arrDateSplited[0]} de ${months[arrDateSplited[1]]} de ${arrDateSplited[2]}`;
};

console.log(convertDateToString("26/03/2025"));