let str = "Learning JavaScript";
let sub = "Java";

console.log(str.indexOf(sub) !== -1);


function mystr(str, sub) {
    let index = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sub[index]) {
            index++;
            if (index === sub.length) {
                return true; 
            }
        } else {
        
            index = 0;
        }
    }
    return false;
}
console.log(mystr(str, sub)); 