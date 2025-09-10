Array.prototype.myMap = function(callback, thisArg) {
    const res = [];
    thisArg = thisArg ? Object(thisArg) : globalThis;
    for(let i = 0; i < this.length; ++i) { 
        res.push(callback.call(thisArg, this[i], i, this));
    }
    return res;
}

const arr = [45, 245, 7, 20, 21, 4];
const x = arr.myMap(function(element, i) {
    this[i] -= 10;
    return element * 3;
}, arr);

console.log(x);
console.log(arr);