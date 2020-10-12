'use strict'

let oddArray = [1,2,3,4,5]
let evenArray = [1,2,3,4,5,6]



let insertShiftArray = function (arr,val){
    let newArr = arr;
    let length = arr.length;
    newArr = arr.splice(length/2,0,val)
    return newArr
}

let insertShiftArray2 = function (arr,val){
    let newArr = arr;
    let length = arr.length;
    let i = 0;
    while (i < length/2){
        newArr[i]=arr[i]
        i++
    }
    newArr[Math.round(length/2)] = val
    i = Math.round(length/2)+1
    while (i<arr.length ){
        newArr[i] = arr[i]
        i++
    }
    return newArr
}