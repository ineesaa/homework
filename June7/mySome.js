function my_Some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const arr = [10, 20, 31, 67];
const evens = my_Some(arr, function (num) {
    return num % 2 === 0;
});
console.log(evens);