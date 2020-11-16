function Mergesort(arr) {
    n = arr.length
    if (n > 1) {
        mid = n / 2
        left = []
        for (let index = 0; index <= mid; index++) {
            left[index] = arr[index]
        }
        right = []
        for (let index = mid; index < n; index++) {
            right[index] = arr[index]
        }
    }
    Mergesort(left)
    Mergesort(right)
    Merge(left,right,arr)
}

function Merge(left,right,arr){
    i = 0;
    j = 0;
    k = 0;

    while (i<left.length && j<right.length){
        if (left[i] <= right[i]) {
            arr[k] = left[i]
            i = i+1
        }
        else {
            arr[k] = right[i]
            j = j+1
        }
        k = k+1
    }
    if (i = left.length){
        for (let index = ; index < arr; index++) {
            arr[index] = right[index]
        }
    }
    else {
        for (let index = j; index < arr; index++) {
            arr[index] = right[index]
        }       
    }
}