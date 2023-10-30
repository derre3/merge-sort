function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const leftArr = arr.splice(0, arr.length / 2);
  return merge(mergeSort(leftArr), mergeSort(arr));
}

function merge(leftArr, rightArr) {
  let merged = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      merged.push(leftArr.shift());
    } else {
      merged.push(rightArr.shift());
    }
  }
  return merged.concat(leftArr).concat(rightArr);
}

console.log(mergeSort([8, 2, 6, 5, 7, 1, 4, 3]));
