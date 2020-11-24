function Mergesort(arr) {
    n = arr.length
    if (n < 2) {
        return arr
    }
    else {
        mid = Math.round(n / 2)
        let left = []
        for (let index = 0; index < mid; index++) {
            left[index] = arr[index]
        }
        let right = []
        for (let index = 0; index < n-mid; index++) {
            right[index] = arr[index+mid]
        }
        Mergesort(left)
        Mergesort(right)
        Merge(left, right, arr)
    }
}

function Merge(left, right, arr) {
    i = 0;
    j = 0;
    k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i = i + 1
        }
        else {
            arr[k] = right[j]
            j = j + 1
        }
        k = k + 1
    }
    if (i == left.length) {
        for (j; j < right.length; j++) {
            arr[k] = right[j]
            k = k + 1
        }
    }
    else {
        for (i; i < left.length; i++) {
            arr[k] = left[i]
            k = k + 1
        }
    }
    return arr
}

let test = [35, 6, 4, 3, 50, 2, 1]
Mergesort(test)