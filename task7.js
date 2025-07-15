let arr = [3, 6, 9, 12]
    console.log(arr.indexOf(9))

    function find(arr, x){
        for (let ch in arr){
            if(arr[ch] == x){
                return ch
            }
        }
                return false
        
    }
    console.log(find(arr, 9))