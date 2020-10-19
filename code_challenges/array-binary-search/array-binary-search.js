'use strict'

let array = [2, 5, 7, 12, 16, 20, 25, 27, 30, 38, 44, 69]

let BinarySearch = function (arr, key) {

    let high = arr.length - 1
    let low = 0;
    let mid = Math.round(high / 2)
    
    while (arr[mid] != key) {
        mid = Math.round((high+low) / 2)
        if (arr[mid] == key) {
            console.log(`The index of ${key} is ${mid}`);
            return mid;
        }
        else if (high - low < 0.5) {
            console.log(`Key doesn't exist in array`);
            return -1
        }
        else if (arr[mid] > key) {
            high = mid - 1
        }
        else if (arr[mid] < key) {
            low = mid + 1
        }

    }
}

module.exports = BinarySearch;