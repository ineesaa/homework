Array.prototype.myFilter = function(callback, thisArg) {
    thisArg = thisArg ? Object(thisArg) : globalThis;
    let res = [];
    for( let i = 0; i < this.length; ++i) {
        if(callback.call(thisArg, this[i], i, this)) {
            res.push(callback(this[i], i, this));
        }
    }
    return res;
}
const arr = [1, 2, 3, 4, 5];
const x = arr.myFilter(function(element, i) {
    this[i] *= 2;

})