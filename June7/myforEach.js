Array.prototype.myForEach = function(callback, thisArg) {
    thisArg = thisArg ? Object(thisArg) : globalThis
   for(let i = 0; i < this.length; ++i) {
       callback.call(thisArg, this[i], i, this);
   }

}
const arr = ["banana", 3, 5, "cherry", 98];
arr.myForEach(function(element, index, array){
   console.log(`the element of ${index} is ${element} in [${array}]`);
});


