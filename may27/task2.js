function toUpper(str){
    return str.toUpperCase();
}
console.log(toUpper("Hello World"));

function Upper(x) {
    let arr = x.split("");
    for (let i in arr) {
        let code = arr[i].charCodeAt(0);
        if (code >= 97 && code <= 122) {
            arr[i] = String.fromCharCode(code - 32);
        }
    }
    return arr.join("");
}

let x = "Hello World";
console.log(Upper(x))