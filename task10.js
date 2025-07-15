let arr = [1, 2, 3, 4, 5];
let x = arr.reduce((acc, val) => acc + val, 0);
console.log(x);

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArr(arr));