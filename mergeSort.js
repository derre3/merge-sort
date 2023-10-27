function mergeSort(arr) {
  if (arr.length / 2 < 2) return arr;
  else {
    let newArr = arr.splice(0, arr.length / 2);
    sort(arr);
    sort(newArr);
    arr = [newArr, arr];
    return mergeSort(arr);
  }
}

function sort(arr) {}

console.log(mergeSort([2, 8, 6, 1, 7]));
