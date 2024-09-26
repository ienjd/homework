const arr = [1, 40, -5, 10, 0, 45, 23, 23, 822,98,9,12,345,6,7,4,3,2324,45345,23,12];

function sortUp(arr){

    for (let i = arr.length -1; i > 0; i-- ){
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}
    sortUp(arr);

function sortDown(arr){
    
    for (let i = arr.length -1; i > 0; i-- ){
        for (let j = 0; j < i; j++){
            if (arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1 ] = temp;
            }
        }
    }
    console.log(arr);
}

sortDown(arr);