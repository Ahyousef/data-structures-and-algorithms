function InsertionSort(arr){
  for (let index = 1; index < arr.length; index++) {
      let prev = index-1;
      let temp = arr[index]

      while (prev>=0 && temp < arr[prev]){
          arr[prev+1] = arr[prev]
          prev = prev-1
      }
      arr[j+1] = temp
  }  
}
