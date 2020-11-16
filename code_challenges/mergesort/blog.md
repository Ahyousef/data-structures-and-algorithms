# Selection Sort

Merge Sort is a sorting algorithm that works by dividing up the array into two halves, left and right, then doing that until there is only one element in each left and right, merges them together then moves to the next level.

## Pseudo code

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

![visualization](../visualization.png)

# Challenge Summary
MergeSort is simple in concept, but hard to trace, this is due to having a level of calls
## Challenge Description

Go through the psedo code, and visualize it

## Approach & Efficiency
Time: O(n^2)
Space: O(n)

