'use strict'

let oddArray = [1,2,3,4,5]
let evenArray = [1,2,3,4,5,6]

let insertShiftArray = function (arr,val){
    let newArr = [];
    let midIndex = Math.ceil(arr.length/2);
    arr.forEach((num,index)=>{
        if (index == midIndex){
            newArr.push(val)
        }
        newArr.push(num)
    })
    return newArr
}

module.exports = insertShiftArray;