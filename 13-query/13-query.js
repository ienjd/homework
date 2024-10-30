const object = {
    search: "Вася", 
    take: 10
    }


function returnQuery(object){
    let keys = Object.keys(object);
    
    for(let i = 0; i < keys.length; i++){
        if (i == 0){
            keys[i] = `${keys[i]}=${object[keys[i]]}`
        } else {
            keys[i] = `&${keys[i]}=${object[keys[i]]}`
        }
    }
    return keys = keys.toString().replaceAll(",","");
}


console.log(returnQuery(object));
