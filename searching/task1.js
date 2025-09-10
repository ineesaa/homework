let arr = [10, 20, 30, 40, 50];
let target =  30;
function linearSearch( arr, target) {
    for (let i in arr) {
        if (arr[i] === target) {
        return Number(i); //
        } 

    }   
    return -1;
}
console.log(linearSearch(arr,30));