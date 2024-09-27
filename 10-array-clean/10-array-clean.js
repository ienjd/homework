let isDelete = number => number % 2 != 0 ? true : false;

const array = [34, 6, 7, 5, 4, 7, 44, 3, 2, 3232, 5, 43, 34, 32, 23, 2334, 5, 6, 34];

console.log(array);

function filtration (arr, fn){

    for (let i = arr.length - 1; i > -1; i--){
        if(fn(arr[i])){
            arr.splice(i, 1);
        } 
    }
    console.log(array);
}

filtration(array, isDelete);

