// Reverse array

let array = [1,2,3,4,5,6]

// expected result = [6,5,4,3,2,1]

// Using for and push

let reverseFunction = function(arr){
    let newArr = []
    let length = arr.length;
    for(let i = (length-1); i > -1; i--){
      newArr.push(arr[i])
    }
    return newArr
}
reverseFunction(array)

// While and without push

let reverseFunction2 = function(arr){
    let finalArr = [];
    let i = 0;
    while (i < arr.length) {
        finalArr[i]=(arr[arr.length-1-i])
        i++
    }
    console.log(finalArr)
    return finalArr
}

reverseFunction2(array)