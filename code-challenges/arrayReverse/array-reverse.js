// Reverse array

let array = [1,2,3,4,5,6]

// expected result = [6,5,4,3,2,1]

let reverseFunction = function(arr){
    let newArr = []
    let length = arr.length;
    for(let i = (length-1); i > -1; i--){
      newArr.push(arr[i])
    }
    return newArr
}
reverseFunction(array)


let reverseFunction2 = function(arr){
    let finalArr = [];
    let i = 0;
    while (i < 6) {
        finalArr.push(arr[arr.length-1-i])
        i++
    }
}

reverseFunction2(array)