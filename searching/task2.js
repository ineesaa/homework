let arr = [10, 20, 30, 35, 38, 40, 50];
let target = 38;

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;

    while (left <= right) {
        let mid = Math.floor(left + right) / 2;

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    console.log("Steps:", steps, "ms");
    return -1; 
}

console.log(binarySearch(arr, target)); 
